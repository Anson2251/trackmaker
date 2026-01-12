import { shallowRef, ref, computed } from 'vue';
import { TerraDraw, type GeoJSONStoreFeatures, type GeoJSONStoreGeometries, TerraDrawExtend } from 'terra-draw';
import { TerraDrawMapLibreGLAdapter } from 'terra-draw-maplibre-gl-adapter';
import type { GeographicShape, GeographicDraftItemProperties, GeographicDraftItemType } from '../libs/cartosketch/definitions';
import { useSketchStore } from '../store/sketch-store';
import { cloneDeep, isArray } from 'lodash-es';
import type { Map as MglMap } from 'maplibre-gl';

type FeatureId = string | number;

export type DrawModes = {
    mode: TerraDrawExtend.TerraDrawBaseDrawMode<any>;
    name: string;
    icon: any;
};

export function createTerraDrawComposable(
    map: MglMap,
    drawerModes: DrawModes[]
) {
    const sketchStore = useSketchStore();
    const draw = shallowRef<TerraDraw | null>(null);
    const activeDrawMethod = ref<string>('select');
    const isDrawingEnabled = ref(false);

    // Undo/Redo state
    interface UndoState {
        type: 'create' | 'update' | 'delete' | 'clear';
        featureId?: string;
        feature?: GeoJSONStoreFeatures | GeoJSONStoreFeatures[]; // for clear: array of all features
    }
    const undoStack = ref<UndoState[]>([]);
    const redoStack = ref<UndoState[]>([]);
    const maxUndoSteps = 50;

    const canUndo = computed(() => undoStack.value.length > 0);
    const canRedo = computed(() => redoStack.value.length > 0);

    // Track feature IDs to draft IDs mapping
    const featureToDraftId = ref<Map<string, string>>(new Map());
    const draftIdToFeatureId = ref<Map<string, string>>(new Map());

    // Flag to prevent circular updates when programmatically syncing
    const isProgrammaticChange = ref(false);

    // Feature type for internal use (compatible with GeoJSONStoreFeatures)
    type DrawFeature = GeoJSONStoreFeatures;

    // Initialize TerraDraw
    const initDraw = () => {
        if (!map) return;

        draw.value = new TerraDraw({
            adapter: new TerraDrawMapLibreGLAdapter({ map }),
            modes: drawerModes.map((item) => item.mode),
        });

        draw.value.start();
        setupEventListeners();
        isDrawingEnabled.value = true;
    };

    // Convert terradraw feature to GeographicShape
    const featureToShape = (feature: DrawFeature): GeographicShape => {
        const geometryType = feature.geometry.type;
        // Ensure geometry type matches SupportedShapeType
        if (geometryType === 'Polygon' || geometryType === 'LineString' || geometryType === 'Point') {
            return {
                type: geometryType,
                coordinates: feature.geometry.coordinates as any
            };
        }
        // Fallback (should not happen)
        return {
            type: 'Point',
            coordinates: [0, 0]
        };
    };

    // Convert terradraw properties to draft properties
    const featureToProperties = (feature: DrawFeature): GeographicDraftItemProperties => {
        const props = feature.properties || {};
        return {
            strokeColor: props.strokeColor as string || '#3b82f6',
            strokeThickness: (props.strokeWidth as number) || 2,
            fillColor: props.fillColor as string || 'rgba(59, 130, 246, 0.2)',
            visible: true
        };
    };

    // Save feature as draft (create or update)
    const saveFeatureAsDraft = async (feature: DrawFeature, isUpdate = false) => {
        if (!feature?.id) return;
        const featureId = String(feature.id);
        const shape = featureToShape(feature);
        const properties = featureToProperties(feature);

        if (isUpdate && featureToDraftId.value.has(featureId)) {
            const draftId = featureToDraftId.value.get(featureId)!;
            await sketchStore.updateDraft(draftId, { shape, properties });
        } else {
            const draft = await sketchStore.addDraft(shape, properties, {
                name: `Drawing ${feature.geometry?.type || 'Unknown'}`,
            });
            featureToDraftId.value.set(featureId, draft.id);
            draftIdToFeatureId.value.set(draft.id, featureId);
        }
    };

    // Delete draft by feature ID
    const deleteDraftByFeatureId = async (featureId: string) => {
        if (featureToDraftId.value.has(featureId)) {
            const draftId = featureToDraftId.value.get(featureId)!;
            await sketchStore.deleteDraft(draftId);
            featureToDraftId.value.delete(featureId);
            draftIdToFeatureId.value.delete(draftId);
        }
    };

    // Push undo state and clear redo stack
    const pushUndoState = (state: UndoState) => {
        undoStack.value.push(state);
        redoStack.value = []; // Clear redo stack on new action

        // Limit stack size
        if (undoStack.value.length > maxUndoSteps) {
            undoStack.value.shift();
        }
    };

    // Setup event listeners
    const setupEventListeners = () => {
        if (!draw.value) return;

        // Handle feature creation/update/delete via 'change' event
        draw.value.on('change', (ids: FeatureId[], type: string) => {
            if (isProgrammaticChange.value) return; // Skip if change originated from programmatic sync

            console.log('[TerraDraw] Change event:', type, ids);

            // Process each affected feature ID
            for (const id of ids) {
                if (!id) continue;

                // Get the current snapshot of the feature
                const snapshot = draw.value!.getSnapshotFeature(id);
                const featureId = String(id);

                if (type === 'add' || type === 'create') {
                    if (snapshot) {
                        // Save draft and push undo state
                        void saveFeatureAsDraft(snapshot);
                        pushUndoState({
                            type: 'create',
                            featureId,
                            feature: cloneDeep(snapshot)
                        });
                    }
                } else if (type === 'update') {
                    if (snapshot) {
                        // Update draft and push undo state
                        void saveFeatureAsDraft(snapshot, true);
                        pushUndoState({
                            type: 'update',
                            featureId,
                            feature: cloneDeep(snapshot)
                        });
                    }
                } else if (type === 'delete' || type === 'remove') {
                    // Delete draft and push undo state
                    void deleteDraftByFeatureId(featureId);
                    pushUndoState({
                        type: 'delete',
                        featureId
                    });
                }
            }
        });

    };

    // Undo: revert the last change
    const undo = async () => {
        if (!canUndo.value || !draw.value) return;

        const state = undoStack.value.pop();
        if (!state) return;

        redoStack.value.push(state);
        const { featureId, feature } = state;

        isProgrammaticChange.value = true;
        try {
            if (!isArray(feature)) {
                if (state.type === 'create' && featureId) {
                    // Undo create = delete the feature
                    draw.value.removeFeatures([featureId]);
                    await deleteDraftByFeatureId(featureId);
                } else if (state.type === 'delete') {
                    // Undo delete = restore the feature from snapshot
                    if (feature) {
                        draw.value.addFeatures([feature]);
                        await saveFeatureAsDraft(feature);
                    }
                } else if (state.type === 'update') {
                    // Undo update = revert to previous state (feature contains the snapshot before update)
                    if (feature) {
                        draw.value.addFeatures([feature]);
                        await saveFeatureAsDraft(feature, true);
                    }
                }
            } else if (state.type === 'clear') {
                // Undo clear = restore all features from snapshot
                if (feature && Array.isArray(feature)) {
                    draw.value.addFeatures(feature);
                    for (const f of feature) {
                        await saveFeatureAsDraft(f);
                    }
                }
            }
        } finally {
            isProgrammaticChange.value = false;
        }
    };

    // Redo: reapply the undone change
    const redo = async () => {
        if (!canRedo.value || !draw.value) return;

        const state = redoStack.value.pop();
        if (!state) return;

        undoStack.value.push(state);
        const { featureId, feature } = state;

        isProgrammaticChange.value = true;
        try {
            if (!isArray(feature)) {
                if (state.type === 'create') {
                    // Redo create = restore the feature
                    if (feature) {
                        draw.value.addFeatures([feature]);
                        await saveFeatureAsDraft(feature);
                    }
                } else if (state.type === 'delete' && featureId) {
                    // Redo delete = delete again
                    draw.value.removeFeatures([featureId]);
                    await deleteDraftByFeatureId(featureId);
                } else if (state.type === 'update') {
                    // Redo update = apply update again (feature contains the snapshot after update)
                    if (feature) {
                        draw.value.addFeatures([feature]);
                        await saveFeatureAsDraft(feature, true);
                    }
                }
            } else if (state.type === 'clear') {
                // Redo clear = clear all features again
                const snapshot = draw.value.getSnapshot();
                const featureIds = snapshot.map((f) => String(f.id));
                if (featureIds.length > 0) {
                    draw.value.removeFeatures(featureIds as FeatureId[]);
                }
                for (const f of snapshot) {
                    await deleteDraftByFeatureId(String(f.id));
                }
            }
        } finally {
            isProgrammaticChange.value = false;
        }
    };

    // Clear undo/redo stacks
    const clearHistory = () => {
        undoStack.value = [];
        redoStack.value = [];
    };

    // Set draw mode
    const setMode = (mode: string) => {
        if (!draw.value) return;

        if (mode === 'select') {
            draw.value.setMode('select');
            activeDrawMethod.value = 'select';
        } else {
            activeDrawMethod.value = mode;
            draw.value.setMode(mode);
        }
    };

    // Load existing drafts into terradraw
    const loadDrafts = (drafts: GeographicDraftItemType[]) => {
        if (!draw.value) return;

        // Clear existing mappings
        featureToDraftId.value.clear();
        draftIdToFeatureId.value.clear();

        const features: GeoJSONStoreFeatures[] = drafts.map(draft => ({
            id: draft.id,
            type: 'Feature' as const,
            geometry: {
                type: draft.shape.type,
                coordinates: draft.shape.coordinates
            } as GeoJSONStoreGeometries,
            properties: {
                strokeColor: draft.properties.strokeColor || '#3b82f6',
                strokeWidth: draft.properties.strokeThickness || 2,
                fillColor: draft.properties.fillColor || 'rgba(59, 130, 246, 0.2)',
                mode: draft.shape.type.toLocaleLowerCase(),
                ...draft.properties
            }
        }));

        if (features.length > 0) {
            isProgrammaticChange.value = true;
            try {
                const validationResults = draw.value.addFeatures(features);
                console.log('[TerraDraw] loadDrafts validation results:', validationResults);
                // Log added features for debugging
                const snapshot = draw.value.getSnapshot();
                console.log('[TerraDraw] snapshot after load:', snapshot, features);
                // Update mapping based on actual IDs (should match draft.id if validation succeeded)
                for (const draft of drafts) {
                    const feature = snapshot.find(f => f.id === draft.id);
                    if (feature) {
                        const featureId = String(feature.id);
                        featureToDraftId.value.set(featureId, draft.id);
                        draftIdToFeatureId.value.set(draft.id, featureId);
                    } else {
                        console.warn('[TerraDraw] Draft not found in snapshot:', draft.id);
                        // Fallback to assuming ID matches
                        featureToDraftId.value.set(draft.id, draft.id);
                        draftIdToFeatureId.value.set(draft.id, draft.id);
                    }
                }
            } finally {
                isProgrammaticChange.value = false;
            }
        } else {
            console.log('[TerraDraw] No drafts to load');
        }
    };

    // Clear all drawings from map
    const clearAll = async () => {
        if (!draw.value) return;

        const snapshot = draw.value.getSnapshot();
        const featureIds = snapshot.map((f) => String(f.id));

        if (featureIds.length > 0) {
            // Push clear state to undo stack for undo support
            pushUndoState({
                type: 'clear',
                feature: cloneDeep(snapshot)
            });

            isProgrammaticChange.value = true;
            try {
                draw.value.removeFeatures(featureIds as FeatureId[]);
            } finally {
                isProgrammaticChange.value = false;
            }

            // Clear all drafts
            for (const id of featureIds) {
                await deleteDraftByFeatureId(id);
            }
        }

        featureToDraftId.value.clear();
        draftIdToFeatureId.value.clear();
    };

    // Stop and cleanup
    const stop = () => {
        if (draw.value) {
            draw.value.stop();
            draw.value = null;
        }
        isDrawingEnabled.value = false;
    };

    return {
        draw,
        activeDrawMethod,
        isDrawingEnabled,
        canUndo,
        canRedo,
        initDraw,
        setMode,
        undo,
        redo,
        clearHistory,
        clearAll,
        loadDrafts,
        stop
    };
}

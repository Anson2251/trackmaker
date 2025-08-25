import { v4 as uuidV4 } from 'uuid';
import type { GeographicSketchType, GeographicSketchMetaType, GeographicRouteType, GeographicDraftType } from './definitions';
import { GeographicGeneralMetaDefaultValue, GeographicSketchMetaDefaultValue } from './definitions';

export class CartoSketch {
    readonly id: string;
    meta: GeographicSketchMetaType;
    routes: GeographicRouteType;
    drafts: GeographicDraftType;

    constructor(
        id = uuidV4(),
        routes?: GeographicRouteType,
        drafts?: GeographicDraftType,
        meta?: Partial<GeographicSketchMetaType>
    ) {
        this.id = id;
        this.routes = routes || {
            id: uuidV4(),
            meta: GeographicGeneralMetaDefaultValue(),
            routes: []
        };
        this.drafts = drafts || {
            id: uuidV4(),
            meta: GeographicGeneralMetaDefaultValue(),
            drafts: []
        };
        this.meta = {
            ...GeographicSketchMetaDefaultValue(),
            ...meta
        };
    }

    toStorage(): GeographicSketchType {
        return {
            id: this.id,
            meta: this.meta,
            routes: this.routes,
            drafts: this.drafts
        };
    }

    static fromStorage(data: GeographicSketchType): CartoSketch {
        return new CartoSketch(
            data.id,
            data.routes,
            data.drafts,
            data.meta
        );
    }

    clone(): CartoSketch {
        return CartoSketch.fromStorage(this.toStorage());
    }

    updateName(name: string): void {
        this.meta.name = name;
        this.meta.modification_timestamp = Date.now();
    }

    updateDescription(description: string): void {
        this.meta.description = description;
        this.meta.modification_timestamp = Date.now();
    }

    addTag(tag: string): void {
        if (!this.meta.tags.includes(tag)) {
            this.meta.tags.push(tag);
            this.meta.modification_timestamp = Date.now();
        }
    }

    removeTag(tag: string): void {
        const index = this.meta.tags.indexOf(tag);
        if (index > -1) {
            this.meta.tags.splice(index, 1);
            this.meta.modification_timestamp = Date.now();
        }
    }
}

export default CartoSketch;

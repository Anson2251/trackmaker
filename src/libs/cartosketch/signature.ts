import type { GeographicRouteItemType, GeographicDraftItemType, GeographicSketchMetaType } from './definitions';
import * as crypto from '../../utils/crypto';

// Sketch interface for signing operations
interface Sketch {
  id: string;
  meta: GeographicSketchMetaType;
  routes: GeographicRouteItemType[];
  drafts: GeographicDraftItemType[];
}

export class CartoSketchSigner {
    static async signSketch(sketch: Sketch, privateKeyArmored: string, passphrase?: string): Promise<Sketch> {
        const privateKey = await crypto.readPrivateKey(privateKeyArmored, passphrase);

        // Create a stable string representation
        const sketchData = JSON.stringify({
            id: sketch.id,
            routes: sketch.routes,
            drafts: sketch.drafts,
            meta: {
                name: sketch.meta.name,
                description: sketch.meta.description,
                creation_timestamp: sketch.meta.creation_timestamp,
                modification_timestamp: sketch.meta.modification_timestamp,
                tags: sketch.meta.tags,
                version: sketch.meta.version
            }
        });

        const checksum = await crypto.generateSHA512(sketchData);
        const signature = await crypto.generateSignature(checksum, privateKey);

        // Create new sketch with signature (immutable update)
        const signedSketch: Sketch = {
            ...sketch,
            meta: {
                ...sketch.meta,
                signature,
                modification_timestamp: Date.now()
            }
        };

        return signedSketch;
    }

    static async verifySketch(sketch: Sketch, publicKeyArmored: string): Promise<boolean> {
        if (sketch.meta.signature === null || sketch.meta.signature === undefined || sketch.meta.signature === "") {
            return false;
        }

        const publicKey = await crypto.readPublicKey(publicKeyArmored);

        // Create the same stable string representation
        const sketchData = JSON.stringify({
            id: sketch.id,
            routes: sketch.routes,
            drafts: sketch.drafts,
            meta: {
                name: sketch.meta.name,
                description: sketch.meta.description,
                creation_timestamp: sketch.meta.creation_timestamp,
                modification_timestamp: sketch.meta.modification_timestamp,
                tags: sketch.meta.tags,
                version: sketch.meta.version
            }
        });

        return crypto.verifySignature(sketchData, sketch.meta.signature, publicKey);
    }
}

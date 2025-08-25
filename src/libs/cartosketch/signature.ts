import type { CartoSketch } from './index';
import * as crypto from '../../utils/crypto';

export class CartoSketchSigner {
    static async signSketch(sketch: CartoSketch, privateKeyArmored: string, passphrase?: string): Promise<CartoSketch> {
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

        // Create new sketch with signature
        const signedSketch = sketch.clone();
        signedSketch.meta.signature = signature;
        signedSketch.meta.modification_timestamp = Date.now();

        return signedSketch;
    }

    static async verifySketch(sketch: CartoSketch, publicKeyArmored: string): Promise<boolean> {
        if (!sketch.meta.signature) {
            return false;
        }

        const publicKey = await crypto.readPublicKey(publicKeyArmored);

        // Create the same stable string representation
        const sketchData = JSON.stringify(sketch.toStorage());

        return await crypto.verifySignature(sketchData, sketch.meta.signature, publicKey);
    }
}

import openpgp from "openpgp";

export async function generateSHA512(message: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await crypto.subtle.digest('SHA-512', data);
    const hex = Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, '0')).join('');
    return hex;
  }

export type SignatureType = {
    checksum: string,
    pubic_key_id: string,
    timestamp: number,
}

export async function retrieveKey(keyId: string) {
    try{
        const keyserverUrl = 'https://keyserver.ubuntu.com/pks/lookup';
        const response = await fetch(`${keyserverUrl}?op=get&search=0x${keyId}`);
        const keyData = await response.text(); 
        return await openpgp.readKey({ armoredKey: keyData });
    }catch(e){
        throw new Error("Unable to retrieve public key from keyserver. Reason:" + e);
    }
}

export async function sign(message: string, key: openpgp.PrivateKey) {
    const unsignedMessage = await openpgp.createCleartextMessage({ text: message });
    const cleartextMessage = await openpgp.sign({
        message: unsignedMessage, // CleartextMessage or Message object
        signingKeys: key
    });
    const signedMessage = await openpgp.readCleartextMessage({
        cleartextMessage // parse armored message
    });
    return signedMessage.armor();
}

export async function verify(armoredMessage: string, key: openpgp.PublicKey) {
    try{
        const signedMessage = await openpgp.readCleartextMessage({
            cleartextMessage: armoredMessage
        });

        const verificationResult = await openpgp.verify({
            message: signedMessage,
            verificationKeys: key
        });
        const { verified } = verificationResult.signatures[0];

        await verified;
        return Promise.resolve(true);
    }catch(e){
        return Promise.resolve(false);
    }
}

export function readPrivateKey(key: string) {
    return openpgp.readPrivateKey({ armoredKey: key });
}

export function readPublicKey(key: string) {
    return openpgp.readKey({ armoredKey: key });
}

export async function generateSignature(checksum: string, privateKey: openpgp.PrivateKey) {
    const timestamp = Date.now();
    const signature: SignatureType = {
        checksum,
        pubic_key_id: privateKey.getKeyID().toHex(),
        timestamp
    };
    const message = btoa(JSON.stringify(signature));
    return btoa(await sign(message, privateKey));
}

export async function decomposeSignature(signature: string, publicKey: openpgp.PublicKey) {
    signature = atob(signature);
    if(await verify(signature, publicKey)){
        const data = (await openpgp.readCleartextMessage({ cleartextMessage: signature })).getText();
        return JSON.parse(atob(data)) as SignatureType;
    }
    else {
        return Promise.reject("Invalid signature");
    }
}

export async function checkSignature(signature: string, publicKey: openpgp.PublicKey, checksum: string) {
    const signatureData = await decomposeSignature(signature, publicKey);
    return (signatureData.checksum === checksum);
}

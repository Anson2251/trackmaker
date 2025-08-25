import * as openpgp from 'openpgp';

export type SignatureType = {
    checksum: string;
    pubic_key_id: string;
    timestamp: number;
};

export async function generateSHA512(input: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

export async function readPrivateKey(privateKeyArmored: string, passphrase?: string): Promise<openpgp.PrivateKey> {
    let privateKey = await openpgp.readPrivateKey({ armoredKey: privateKeyArmored });
    if (passphrase) {
        privateKey = await openpgp.decryptKey({
            privateKey,
            passphrase
        });
    }
    return privateKey;
}

export async function readPublicKey(publicKeyArmored: string): Promise<openpgp.PublicKey> {
    return await openpgp.readKey({ armoredKey: publicKeyArmored });
}

export async function sign(message: string, privateKey: openpgp.PrivateKey): Promise<string> {
    const messageObj = await openpgp.createMessage({ text: message });
    const signed = await openpgp.sign({
        message: messageObj,
        signingKeys: [privateKey],
        detached: true
    });
    return signed;
}

export async function verify(
    message: string,
    signature: string,
    publicKey: openpgp.PublicKey
): Promise<boolean> {
    try {
        const messageObj = await openpgp.createMessage({ text: message });
        const signatureObj = await openpgp.readSignature({ armoredSignature: signature });
        const verificationResult = await openpgp.verify({
            message: messageObj,
            signature: signatureObj,
            verificationKeys: [publicKey]
        });
        return await verificationResult.signatures[0].verified;
    } catch (error) {
        console.error('Signature verification failed:', error);
        return false;
    }
}

export async function generateSignature(
    checksum: string,
    privateKey: openpgp.PrivateKey
): Promise<string> {
    const timestamp = Date.now();
    const signature: SignatureType = {
        checksum,
        pubic_key_id: privateKey.getKeyID().toHex(),
        timestamp
    };
    const message = btoa(JSON.stringify(signature));
    return btoa(await sign(message, privateKey));
}

export async function decomposeSignature(signature: string): Promise<SignatureType> {
    const decodedSignature = atob(signature);
    const message = await openpgp.readMessage({ armoredMessage: atob(decodedSignature) });
    const signatureData = JSON.parse(atob(message.getText()));
    return signatureData;
}

export async function getPublicKeyFromKeyserver(keyId: string): Promise<string | null> {
    try {
        const response = await fetch(`https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x${keyId}`);
        if (response.ok) {
            const publicKey = await response.text();
            return publicKey;
        }
    } catch (error) {
        console.error('Failed to fetch public key:', error);
    }
    return null;
}

export async function verifySignature(
    data: string,
    signature: string,
    publicKey: openpgp.PublicKey
): Promise<boolean> {
    const signatureData = await decomposeSignature(signature);
    const currentChecksum = await generateSHA512(data);

    if (currentChecksum !== signatureData.checksum) {
        return false;
    }

    const message = btoa(JSON.stringify(signatureData));
    const decodedSignature = atob(signature);

    return await verify(message, decodedSignature, publicKey);
}

import { suite, test, expect } from 'vitest';
import { sign, verify, readPrivateKey, readPublicKey, generateSignature, generateSHA512, decomposeSignature } from '../../src/utils/crypto';

/// Sample keys are obtained from the following webpage.
/// https://www.ietf.org/archive/id/draft-bre-openpgp-samples-01.html
const samplePrivateKey = await readPrivateKey(`
    -----BEGIN PGP PRIVATE KEY BLOCK-----
    Comment: Alice's OpenPGP Transferable Secret Key
    Comment: https://www.ietf.org/id/draft-bre-openpgp-samples-01.html

    lFgEXEcE6RYJKwYBBAHaRw8BAQdArjWwk3FAqyiFbFBKT4TzXcVBqPTB3gmzlC/U
    b7O1u10AAP9XBeW6lzGOLx7zHH9AsUDUTb2pggYGMzd0P3ulJ2AfvQ4RtCZBbGlj
    ZSBMb3ZlbGFjZSA8YWxpY2VAb3BlbnBncC5leGFtcGxlPoiQBBMWCAA4AhsDBQsJ
    CAcCBhUKCQgLAgQWAgMBAh4BAheAFiEE64W7X6M6deFelE5j8jFVDE9H444FAl2l
    nzoACgkQ8jFVDE9H447pKwD6A5xwUqIDprBzrHfahrImaYEZzncqb25vkLV2arYf
    a78A/R3AwtLQvjxwLDuzk4dUtUwvUYibL2sAHwj2kGaHnfICnF0EXEcE6RIKKwYB
    BAGXVQEFAQEHQEL/BiGtq0k84Km1wqQw2DIikVYrQrMttN8d7BPfnr4iAwEIBwAA
    /3/xFPG6U17rhTuq+07gmEvaFYKfxRB6sgAYiW6TMTpQEK6IeAQYFggAIBYhBOuF
    u1+jOnXhXpROY/IxVQxPR+OOBQJcRwTpAhsMAAoJEPIxVQxPR+OOWdABAMUdSzpM
    hzGs1O0RkWNQWbUzQ8nUOeD9wNbjE3zR+yfRAQDbYqvtWQKN4AQLTxVJN5X5AWyb
    Pnn+We1aTBhaGa86AQ==
    =n8OM
    -----END PGP PRIVATE KEY BLOCK-----
`.replace(/\r/g, '').split('\n').map(x => x.trim()).join('\n'));
const samplePublicKey = await readPublicKey(`
    -----BEGIN PGP PUBLIC KEY BLOCK-----
    Comment: Alice's OpenPGP certificate
    Comment: https://www.ietf.org/id/draft-bre-openpgp-samples-01.html

    mDMEXEcE6RYJKwYBBAHaRw8BAQdArjWwk3FAqyiFbFBKT4TzXcVBqPTB3gmzlC/U
    b7O1u120JkFsaWNlIExvdmVsYWNlIDxhbGljZUBvcGVucGdwLmV4YW1wbGU+iJAE
    ExYIADgCGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AWIQTrhbtfozp14V6UTmPy
    MVUMT0fjjgUCXaWfOgAKCRDyMVUMT0fjjukrAPoDnHBSogOmsHOsd9qGsiZpgRnO
    dypvbm+QtXZqth9rvwD9HcDC0tC+PHAsO7OTh1S1TC9RiJsvawAfCPaQZoed8gK4
    OARcRwTpEgorBgEEAZdVAQUBAQdAQv8GIa2rSTzgqbXCpDDYMiKRVitCsy203x3s
    E9+eviIDAQgHiHgEGBYIACAWIQTrhbtfozp14V6UTmPyMVUMT0fjjgUCXEcE6QIb
    DAAKCRDyMVUMT0fjjlnQAQDFHUs6TIcxrNTtEZFjUFm1M0PJ1Dng/cDW4xN80fsn
    0QEA22Kr7VkCjeAEC08VSTeV+QFsmz55/lntWkwYWhmvOgE=
    =iIGO
    -----END PGP PUBLIC KEY BLOCK-----
`.replace(/\r/g, '').split('\n').map(x => x.trim()).join('\n'));

suite('Crypto Module', () => {
    test('(sign & verify) successful', async () => {
        const message = 'Hello, World!';
        const signedMessage = await sign(message, samplePrivateKey);

        expect(await verify(signedMessage, samplePublicKey)).toBe(true);
    });

    test('(sign & verify) content changed', async () => {
        const message = 'Hello, World!';
        let signedMessage = await sign(message, samplePrivateKey);
        signedMessage = signedMessage.replace(/Hello, World!/g, 'Hi, World!');

        expect(await verify(signedMessage, samplePublicKey)).toBe(false);
    });

    test('(sign & verify) signature changed', async () => {
        const message = 'Hello, World!';
        let signedMessage = await sign(message, samplePrivateKey);
        signedMessage = signedMessage.split("\n").map((line, index) => {
            if (index === 7) {
                line = "changed" + line;
            }
            return line;
        }).join("\n");

        expect(await verify(signedMessage, samplePublicKey)).toBe(false);
    });

    test('signature generate', async () => {
        const message = 'Hello, World!';
        const checksum = await generateSHA512(message);
        const signature = await generateSignature(checksum, samplePrivateKey);

        const signatureData = await decomposeSignature(signature, samplePublicKey);
        
        expect(signatureData.checksum).toBe(checksum);
        expect(Math.abs(signatureData.timestamp - Date.now()) < 100).toBe(true);
        expect(signatureData.pubic_key_id).toBe(samplePrivateKey.getKeyID().toHex());
    });
    
});
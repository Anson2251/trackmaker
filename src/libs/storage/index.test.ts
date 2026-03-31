import { beforeEach, describe, expect, it, vi } from 'vitest';
import { err, ok } from 'neverthrow';

const provider = {
    init: vi.fn(),
    set: vi.fn(),
    get: vi.fn(),
    save: vi.fn(),
    exportToJson: vi.fn(),
    clear: vi.fn(),
    remove: vi.fn(),
    scanKeys: vi.fn(),
    batchSet: vi.fn(),
};

const getStorage = vi.fn(() => ok(provider));
const getPlatformServices = vi.fn(() => ok({ getStorage }));

vi.mock('@/libs/platform', () => ({
    getPlatformServices,
}));

describe('storage facade', () => {
    beforeEach(async () => {
        vi.resetModules();
        vi.clearAllMocks();
        provider.init.mockResolvedValue(ok(undefined));
        provider.set.mockResolvedValue(ok(undefined));
        provider.get.mockResolvedValue(ok('value'));
        provider.save.mockResolvedValue(ok(undefined));
        provider.exportToJson.mockResolvedValue(ok('{"ok":true}'));
        provider.clear.mockResolvedValue(ok(undefined));
        provider.remove.mockResolvedValue(ok(undefined));
        provider.scanKeys.mockResolvedValue(ok(['a', 'b']));
        provider.batchSet.mockResolvedValue(ok(undefined));
        getStorage.mockReturnValue(ok(provider));
        getPlatformServices.mockReturnValue(ok({ getStorage }));
    });

    it('initializes lazily and delegates get/set operations', async () => {
        const { storageGet, storageSet } = await import('./index');

        await storageSet('key', { ok: true });
        await expect(storageGet('key')).resolves.toBe('value');

        expect(provider.init).toHaveBeenCalledTimes(1);
        expect(provider.set).toHaveBeenCalledWith('key', { ok: true });
        expect(provider.get).toHaveBeenCalledWith('key');
    });

    it('throws provider errors from delegated calls', async () => {
        const { storageSave } = await import('./index');
        provider.save.mockResolvedValueOnce(err(new Error('save failed')));

        await expect(storageSave()).rejects.toThrow('save failed');
    });
});

import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/libs/default-settings', () => ({
    getEarlySetting: vi.fn(() => false),
}));

vi.mock('proj4rs', () => {
    class Projection {
        constructor(_definition: string) {}
        free() {}
    }

    class Point {
        constructor(public x: number, public y: number, public z: number) {}
        free() {}
    }

    const transform = vi.fn((_from, _to, point: Point) => {
        point.x += 100;
        point.y += 200;
    });

    return { Projection, Point, transform };
});

vi.mock('gcoord', () => ({
    default: {
        WGS84: 'WGS84',
        GCJ02: 'GCJ02',
        transform: vi.fn((coords: [number, number], from: string, to: string) => {
            if (from === 'WGS84' && to === 'GCJ02') return [coords[0] + 1, coords[1] + 2];
            if (from === 'GCJ02' && to === 'WGS84') return [coords[0] - 1, coords[1] - 2];
            return coords;
        }),
    },
}));

describe('CoordinateTransformer', () => {
    beforeEach(() => {
        vi.resetModules();
    });

    it('transforms geographic coordinates using the configured projection path', async () => {
        const { CoordinateTransformer } = await import('./coordinate-transformer');

        const transformer = new CoordinateTransformer({
            referencePoint: { latitude: 30, longitude: 120 },
        });

        await expect(transformer.geographicToLocal({ latitude: 31, longitude: 121 })).resolves.toEqual({
            x: 221,
            y: 231,
        });
    });

    it('falls back to equirectangular conversion when proj4 transform fails', async () => {
        const proj4rs = await import('proj4rs');
        vi.mocked(proj4rs.transform).mockImplementationOnce(() => {
            throw new Error('transform failed');
        });

        const { CoordinateTransformer } = await import('./coordinate-transformer');
        const transformer = new CoordinateTransformer({
            referencePoint: { latitude: 30, longitude: 120 },
        });

        const result = await transformer.geographicToLocal({ latitude: 30.001, longitude: 120.001 });

        expect(result.x).toBeCloseTo(96.29, 1);
        expect(result.y).toBeCloseTo(111.19, 1);
    });

    it('converts between WGS84 and GCJ helpers', async () => {
        const { GeographicPoint } = await import('../types');
        const { wgs2gcj, gcj2wgs } = await import('./coordinate-transformer');

        expect(wgs2gcj(new GeographicPoint(30, 120))).toEqual(expect.objectContaining({ latitude: 32, longitude: 121 }));
        expect(gcj2wgs(new GeographicPoint(32, 121))).toEqual(expect.objectContaining({ latitude: 30, longitude: 120 }));
    });

    it('uses the global transformer convenience helpers', async () => {
        const {
            geographicToLocal,
            initializeGlobalTransformer,
            localToGeographic,
        } = await import('./coordinate-transformer');

        initializeGlobalTransformer({ latitude: 30, longitude: 120 });

        await expect(geographicToLocal({ latitude: 31, longitude: 121 })).resolves.toEqual({ x: 221, y: 231 });
        await expect(localToGeographic({ x: 1, y: 2 })).resolves.toEqual({ longitude: 101, latitude: 202 });
    });

    it('throws when transforming without a reference point', async () => {
        const { CoordinateTransformer, geographicToLocal } = await import('./coordinate-transformer');

        const transformer = new CoordinateTransformer();

        await expect(transformer.geographicToLocal({ latitude: 31, longitude: 121 })).rejects.toThrow('Reference point not set');
        await expect(geographicToLocal({ latitude: 31, longitude: 121 })).rejects.toThrow('No reference point available');
    });

    it('falls back on localToGeographic projection failures', async () => {
        const proj4rs = await import('proj4rs');
        vi.mocked(proj4rs.transform).mockImplementationOnce(() => {
            throw new Error('transform failed');
        });

        const { CoordinateTransformer } = await import('./coordinate-transformer');
        const transformer = new CoordinateTransformer({
            referencePoint: { latitude: 30, longitude: 120 },
        });

        const result = await transformer.localToGeographic({ x: 111.319, y: 111.319 });

        expect(result.latitude).toBeCloseTo(30.001, 3);
        expect(result.longitude).toBeCloseTo(120.001, 3);
    });
});

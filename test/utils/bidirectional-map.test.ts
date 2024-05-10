import { suite, test, expect } from 'vitest';
import BidirectionalMap from '../../src/utils/bidirectional-map';

suite('BidirectionalMap', () => {
    test('can be constructed from an array of key-value pairs', () => {
        const map = new BidirectionalMap([{ key1: 'a', key2: 1 }, { key1: 'b', key2: 2 }]);
        expect(map.getForward('a')).toBe(1);
        expect(map.getForward('b')).toBe(2);
        expect(map.getBackward(1)).toBe('a');
        expect(map.getBackward(2)).toBe('b');
    });

    test('can set a new key-value pair', () => {
        const map = new BidirectionalMap([]);
        map.set('a', 1);
        expect(map.getForward('a')).toBe(1);
        expect(map.getBackward(1)).toBe('a');
    });

    test('can remove a key-value pair', () => {
        const map = new BidirectionalMap([{ key1: 'a', key2: 1 }]);
        map.removeForward('a');
        expect(map.getForward('a')).toBeUndefined();
        expect(map.getBackward(1)).toBeUndefined();
    });
});
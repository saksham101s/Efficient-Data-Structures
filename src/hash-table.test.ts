import { HashTable } from './hash-table';

describe('HashTable', () => {
    let hashTable: HashTable<string | number>;

    beforeEach(() => {
        // Using a small size to easily test collisions
        hashTable = new HashTable<string | number>(5);
    });

    test('should set and get a value', () => {
        hashTable.set('name', 'Alice');
        expect(hashTable.get('name')).toBe('Alice');
    });

    test('get should return null for a non-existent key', () => {
        expect(hashTable.get('nonexistent')).toBeNull();
    });

    test('should update the value of an existing key', () => {
        hashTable.set('age', 30);
        hashTable.set('age', 31);
        expect(hashTable.get('age')).toBe(31);
    });

    test('should handle collisions correctly', () => {
        // These two keys are designed to collide with a table size of 5
        const key1 = 'abc'; // hash = (97*0 + 98*1 + 99*2) % 5 = 296 % 5 = 1
        const key2 = 'cba'; // hash = (99*0 + 98*1 + 97*2) % 5 = 292 % 5 = 2
        // Let's find better colliding keys.
        // 'a' = 97 % 5 = 2
        // 'f' = 102 % 5 = 2
        hashTable.set('a', 'Value A');
        hashTable.set('f', 'Value F');

        expect(hashTable.get('a')).toBe('Value A');
        expect(hashTable.get('f')).toBe('Value F');
    });

    test('should delete a key-value pair', () => {
        hashTable.set('city', 'New York');
        expect(hashTable.delete('city')).toBe(true);
        expect(hashTable.get('city')).toBeNull();
    });

    test('delete should return false for a non-existent key', () => {
        expect(hashTable.delete('nonexistent')).toBe(false);
    });

    test('should handle deleting in a collision chain', () => {
        hashTable.set('a', 'Value A');
        hashTable.set('f', 'Value F');

        expect(hashTable.delete('a')).toBe(true);
        expect(hashTable.get('a')).toBeNull();
        expect(hashTable.get('f')).toBe('Value F');
    });
});

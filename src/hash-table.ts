import { LinkedList } from './linked-list';

interface IHashNode<T> {
    key: string;
    value: T;
}

export class HashTable<T> {
    private buckets: LinkedList<IHashNode<T>>[];
    private size: number;

    constructor(size: number = 32) {
        this.size = size;
        this.buckets = Array.from({ length: this.size }, () => new LinkedList<IHashNode<T>>());
    }

    /**
     * A private hash function to determine the index for a given key.
     * @param key The key to hash.
     * @returns The index in the buckets array.
     */
    private _hash(key: string): number {
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
            0
        );
        return hash % this.size;
    }

    /**
     * Sets a key-value pair in the hash table.
     * If the key already exists, its value will be updated.
     * @param key The key to set.
     * @param value The value to associate with the key.
     */
    public set(key: string, value: T): void {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        
        const node = bucket.findByPredicate((n) => n.key === key);

        if (node) {
            // Key exists, update the value.
            node.value.value = value;
        } else {
            // Key is new, append to the bucket's linked list.
            bucket.append({ key, value });
        }
    }

    /**
     * Retrieves the value for a given key.
     * @param key The key to retrieve the value for.
     * @returns The value associated with the key, or null if not found.
     */
    public get(key: string): T | null {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        
        const node = bucket.findByPredicate((n) => n.key === key);
        return node ? node.value.value : null;
    }

    /**
     * Deletes a key-value pair from the hash table.
     * @param key The key to delete.
     * @returns True if the key was found and deleted, otherwise false.
     */
    public delete(key: string): boolean {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        return bucket.deleteByPredicate((n) => n.key === key);
    }
}


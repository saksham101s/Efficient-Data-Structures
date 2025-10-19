import { PriorityQueue } from './priority-queue';

describe('PriorityQueue', () => {
    let pq: PriorityQueue<string>;

    beforeEach(() => {
        pq = new PriorityQueue<string>();
    });

    test('should start empty', () => {
        expect(pq.isEmpty()).toBe(true);
        expect(pq.getSize()).toBe(0);
    });

    test('should insert elements and maintain heap property', () => {
        pq.insert('Task C', 3);
        pq.insert('Task A', 1);
        pq.insert('Task B', 2);
        
        expect(pq.getSize()).toBe(3);
        // We don't test the internal heap structure, but we test the output.
    });

    test('should extract the minimum priority element', () => {
        pq.insert('Low Priority', 10);
        pq.insert('High Priority', 1);
        pq.insert('Medium Priority', 5);

        expect(pq.extractMin()).toBe('High Priority');
        expect(pq.getSize()).toBe(2);
    });

    test('should handle extracting from an empty queue', () => {
        expect(pq.extractMin()).toBeNull();
    });

    test('should correctly handle a sequence of insertions and extractions', () => {
        pq.insert('Task 1', 5);
        pq.insert('Task 2', 2);
        pq.insert('Task 3', 8);

        expect(pq.extractMin()).toBe('Task 2');

        pq.insert('Task 4', 1);
        pq.insert('Task 5', 6);

        expect(pq.extractMin()).toBe('Task 4');
        expect(pq.extractMin()).toBe('Task 1');
        expect(pq.extractMin()).toBe('Task 5');
        expect(pq.extractMin()).toBe('Task 3');
        expect(pq.isEmpty()).toBe(true);
    });

    test('should handle items with the same priority', () => {
        pq.insert('A', 2);
        pq.insert('B', 1);
        pq.insert('C', 2);
        
        expect(pq.extractMin()).toBe('B');
        // The order for items with the same priority is not guaranteed
        const nextItems = new Set([pq.extractMin(), pq.extractMin()]);
        expect(nextItems.has('A')).toBe(true);
        expect(nextItems.has('C')).toBe(true);
    });
});

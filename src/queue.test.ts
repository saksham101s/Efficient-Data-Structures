import { Queue } from './queue';

describe('Queue', () => {
    let queue: Queue<string>;

    beforeEach(() => {
        queue = new Queue<string>();
    });

    test('new queue should be empty', () => {
        expect(queue.isEmpty()).toBe(true);
        expect(queue.getSize()).toBe(0);
    });

    test('enqueue should add items to the queue', () => {
        queue.enqueue('a');
        queue.enqueue('b');
        expect(queue.getSize()).toBe(2);
    });

    test('dequeue should remove items in FIFO order', () => {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        expect(queue.dequeue()).toBe('a');
        expect(queue.dequeue()).toBe('b');
        expect(queue.getSize()).toBe(1);
    });

    test('peek should return the front item without removing it', () => {
        queue.enqueue('a');
        queue.enqueue('b');
        expect(queue.peek()).toBe('a');
        expect(queue.getSize()).toBe(2);
    });

    test('dequeue on an empty queue should return null', () => {
        expect(queue.dequeue()).toBeNull();
    });

    test('peek on an empty queue should return null', () => {
        expect(queue.peek()).toBeNull();
    });
});

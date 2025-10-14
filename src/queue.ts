import { LinkedList } from './linked-list';

/**
 * A Queue class implementing a FIFO (First-In, First-Out) data structure.
 */
export class Queue<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new LinkedList<T>();
    }

    /**
     * Adds a new value to the end of the queue (enqueues it).
     * @param value The value to enqueue.
     */
    public enqueue(value: T): void {
        // Adding to the queue is the same as appending to the list. O(1)
        this.list.append(value);
    }

    /**
     * Removes the value from the front of the queue and returns it (dequeues it).
     * @returns The dequeued value, or null if the queue is empty.
     */
    public dequeue(): T | null {
        // Removing from the queue is the same as deleting the head of the list. O(1)
        return this.list.deleteHead();
    }

    /**
     * Returns the value at the front of the queue without removing it.
     * @returns The front value, or null if the queue is empty.
     */
    public peek(): T | null {
        // Peeking the queue is the same as peeking the head of the list. O(1)
        return this.list.peekHead();
    }

    /**
     * Checks if the queue is empty.
     * @returns True if the queue is empty, false otherwise.
     */
    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    /**
     * Gets the current size of the queue.
     */
    public getSize(): number {
        return this.list.getSize();
    }
}

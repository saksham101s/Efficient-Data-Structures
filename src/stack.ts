import { LinkedList } from './linked-list';

/**
 * A Stack class implementing a LIFO (Last-In, First-Out) data structure.
 */
export class Stack<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new LinkedList<T>();
    }

    /**
     * Pushes a new value onto the top of the stack.
     * @param value The value to push.
     */
    public push(value: T): void {
        // Pushing to the stack is the same as prepending to the list. O(1)
        this.list.prepend(value);
    }

    /**
     * Pops the top value from the stack and returns it.
     * @returns The popped value, or null if the stack is empty.
     */
    public pop(): T | null {
        // Popping from the stack is the same as deleting the head of the list. O(1)
        return this.list.deleteHead();
    }

    /**
     * Returns the top value of the stack without removing it.
     * @returns The top value, or null if the stack is empty.
     */
    public peek(): T | null {
        // Peeking the stack is the same as peeking the head of the list. O(1)
        return this.list.peekHead();
    }

    /**
     * Checks if the stack is empty.
     * @returns True if the stack is empty, false otherwise.
     */
    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    /**
     * Gets the current size of the stack.
     */
    public getSize(): number {
        return this.list.getSize();
    }
}

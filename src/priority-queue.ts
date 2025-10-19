/**
 * Represents a node in the Priority Queue.
 * It stores both the value and its priority.
 */
interface IHeapNode<T> {
    value: T;
    priority: number;
}

/**
 * Implements a Priority Queue using a Min-Binary-Heap.
 * Elements with a lower priority number are considered higher priority.
 */
export class PriorityQueue<T> {
    private heap: IHeapNode<T>[] = [];

    /**
     * Checks if the priority queue is empty.
     * @returns True if the queue is empty, false otherwise.
     */
    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    /**
     * Gets the number of elements in the queue.
     * @returns The size of the queue.
     */
    public getSize(): number {
        return this.heap.length;
    }

    /**
     * Inserts an element into the priority queue with a given priority.
     * @param value The value to insert.
     * @param priority The priority of the value.
     */
    public insert(value: T, priority: number): void {
        this.heap.push({ value, priority });
        this.siftUp(this.heap.length - 1);
    }

    /**
     * Removes and returns the element with the highest priority (lowest priority number).
     * @returns The element with the highest priority, or null if the queue is empty.
     */
    public extractMin(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        this.swap(0, this.heap.length - 1);
        const { value } = this.heap.pop() as IHeapNode<T>;
        
        if (!this.isEmpty()) {
            this.siftDown(0);
        }

        return value;
    }

    /**
     * Moves a node up in the heap to maintain the heap property.
     * @param index The index of the node to move up.
     */
    private siftUp(index: number): void {
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index].priority < this.heap[parentIndex].priority) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    /**
     * Moves a node down in the heap to maintain the heap property.
     * @param index The index of the node to move down.
     */
    private siftDown(index: number): void {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestIndex = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallestIndex].priority) {
            smallestIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallestIndex].priority) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            this.swap(index, smallestIndex);
            this.siftDown(smallestIndex);
        }
    }

    /**
     * Swaps two elements in the heap.
     * @param i The index of the first element.
     * @param j The index of the second element.
     */
    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

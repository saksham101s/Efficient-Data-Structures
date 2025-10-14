// Node class represents a single element in the list
class ListNode<T> {
    public value: T;
    public next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class implements the full data structure
export class LinkedList<T> {
    private head: ListNode<T> | null;
    private tail: ListNode<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Appends a new node with the given value to the end of the list.
     * @param value The value to append.
     */
    public append(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    /**
     * Prepends a new node with the given value to the start of the list.
     * @param value The value to prepend.
     */
    public prepend(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    /**
     * [NEW] Removes the head node from the list.
     * @returns The value of the removed head node, or null if the list is empty.
     */
    public deleteHead(): T | null {
        if (!this.head) {
            return null;
        }

        const deletedHeadValue = this.head.value;
        this.head = this.head.next;

        // If the list becomes empty after deletion
        if (!this.head) {
            this.tail = null;
        }

        this.size--;
        return deletedHeadValue;
    }

    /**
     * [NEW] Returns the value of the head node without removing it.
     * @returns The value of the head node, or null if the list is empty.
     */
    public peekHead(): T | null {
        return this.head ? this.head.value : null;
    }

    /**
     * Finds a node with the given value.
     * @param value The value to find.
     * @returns The node if found, otherwise null.
     */
    public find(value: T): ListNode<T> | null {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    /**
     * Deletes a node with the given value from the list.
     * @param value The value to delete.
     * @returns The deleted node if found, otherwise null.
     */
    public delete(value: T): ListNode<T> | null {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            this.deleteHead();
            return this.head;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                const deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                if (!currentNode.next) {
                    this.tail = currentNode;
                }
                this.size--;
                return deletedNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    /**
     * Returns an array representation of the list.
     * @returns An array of the list's values.
     */
    public toArray(): T[] {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    /**
     * Gets the current size of the list.
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * Checks if the list is empty.
     */
    public isEmpty(): boolean {
        return this.size === 0;
    }
}


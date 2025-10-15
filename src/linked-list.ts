import { ListNode } from './list-node';

export class LinkedList<T> {
    public head: ListNode<T> | null = null;
    public tail: ListNode<T> | null = null;
    public size: number = 0;

    /**
     * Checks if the linked list is empty.
     * @returns True if the list has no elements, otherwise false.
     */
    public isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * Returns the number of elements in the linked list.
     * @returns The size of the list.
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * Appends a new value to the end of the linked list.
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
     * Prepends a new value to the start of the linked list.
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
     * Deletes the first node that matches the predicate.
     * @param predicate A function to test each element for a condition.
     * @returns True if an element was deleted, otherwise false.
     */
    public deleteByPredicate(predicate: (value: T) => boolean): boolean {
        if (!this.head) {
            return false;
        }

        if (predicate(this.head.value)) {
            this.deleteHead();
            return true;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (predicate(currentNode.next.value)) {
                if (currentNode.next === this.tail) {
                    this.tail = currentNode;
                }
                currentNode.next = currentNode.next.next;
                this.size--;
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    
    /**
     * Finds the first node that satisfies the provided testing function.
     * @param predicate A function to test each element for a condition.
     * @returns The ListNode if found, otherwise null.
     */
    public findByPredicate(predicate: (value: T) => boolean): ListNode<T> | null {
        let currentNode = this.head;
        while (currentNode) {
            if (predicate(currentNode.value)) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    /**
     * Deletes and returns the head of the list.
     * @returns The value of the former head, or null if the list was empty.
     */
    public deleteHead(): T | null {
        if (!this.head) {
            return null;
        }
        const deletedValue = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return deletedValue;
    }

    /**
     * Returns the value of the head of the list without removing it.
     * @returns The value of the head, or null if the list is empty.
     */
    public peekHead(): T | null {
        return this.head ? this.head.value : null;
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
}


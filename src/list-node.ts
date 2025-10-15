/**
 * Represents a single node in a Linked List.
 * It holds a value and a reference (pointer) to the next node in the list.
 */
export class ListNode<T> {
    public next: ListNode<T> | null = null;

    constructor(public value: T) {}
}

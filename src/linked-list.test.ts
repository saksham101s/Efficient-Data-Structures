import { LinkedList } from './linked-list';

describe('LinkedList', () => {
    let list: LinkedList<number>;

    // This function runs before each test in this block
    beforeEach(() => {
        list = new LinkedList<number>();
    });

    test('isEmpty should return true for a new list', () => {
        expect(list.isEmpty()).toBe(true);
    });

    test('getSize should be 0 for a new list', () => {
        expect(list.getSize()).toBe(0);
    });

    test('append should add elements to the end of the list', () => {
        list.append(10);
        list.append(20);
        expect(list.getSize()).toBe(2);
        expect(list.head?.value).toBe(10);
        expect(list.tail?.value).toBe(20);
    });

    test('prepend should add elements to the start of the list', () => {
        list.prepend(10);
        list.prepend(20);
        expect(list.getSize()).toBe(2);
        expect(list.head?.value).toBe(20);
        expect(list.tail?.value).toBe(10);
    });

    test('toArray should return a correct array representation', () => {
        list.append(10);
        list.append(20);
        list.append(30);
        expect(list.toArray()).toEqual([10, 20, 30]);
    });

    test('deleteByPredicate should handle removing the head', () => {
        list.append(10);
        list.append(20);
        const deleted = list.deleteByPredicate(val => val === 10);
        expect(deleted).toBe(true);
        expect(list.head?.value).toBe(20);
    });

    test('deleteByPredicate should handle removing the tail', () => {
        list.append(10);
        list.append(20);
        const deleted = list.deleteByPredicate(val => val === 20);
        expect(deleted).toBe(true);
        expect(list.tail?.value).toBe(10);
    });

    test('deleteHead should remove the first element', () => {
        list.append(10);
        list.append(20);
        const value = list.deleteHead();
        expect(value).toBe(10);
        expect(list.getSize()).toBe(1);
        expect(list.head?.value).toBe(20);
    });

    test('peekHead should return the value of the first element', () => {
        list.append(10);
        list.append(20);
        expect(list.peekHead()).toBe(10);
        expect(list.getSize()).toBe(2);
    });

    test('findByPredicate should find the correct node', () => {
        list.append(10);
        list.append(20);
        const node = list.findByPredicate(val => val === 20);
        expect(node).not.toBeNull();
        expect(node?.value).toBe(20);
    });
});


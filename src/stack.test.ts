import { Stack } from './stack';

describe('Stack', () => {
    let stack: Stack<number>;

    // This function runs before each test in this block
    beforeEach(() => {
        stack = new Stack<number>();
    });

    test('isEmpty should return true for a new stack', () => {
        expect(stack.isEmpty()).toBe(true);
    });

    test('isEmpty should return false for a non-empty stack', () => {
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });

    test('getSize should return the correct number of items', () => {
        expect(stack.getSize()).toBe(0);
        stack.push(1);
        stack.push(2);
        expect(stack.getSize()).toBe(2);
    });

    test('push and pop should follow LIFO principle', () => {
        stack.push(10);
        stack.push(20);
        expect(stack.pop()).toBe(20);
        expect(stack.pop()).toBe(10);
    });

    test('pop on an empty stack should return null', () => {
        expect(stack.pop()).toBeNull();
    });

    test('peek should return the top item without removing it', () => {
        stack.push(30);
        stack.push(40);
        expect(stack.peek()).toBe(40);
        expect(stack.getSize()).toBe(2); // Size should not change
    });

    test('peek on an empty stack should return null', () => {
        expect(stack.peek()).toBeNull();
    });
});

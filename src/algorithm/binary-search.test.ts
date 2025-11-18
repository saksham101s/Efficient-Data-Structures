import { binarySearch } from './binary-search';

describe('Binary Search', () => {
    test('should find the index of a target in the middle of the array', () => {
        const sortedArray = [1, 3, 5, 7, 9, 11, 13];
        expect(binarySearch(sortedArray, 7)).toBe(3);
    });

    test('should find the index of a target at the beginning of the array', () => {
        const sortedArray = [1, 3, 5, 7, 9];
        expect(binarySearch(sortedArray, 1)).toBe(0);
    });

    test('should find the index of a target at the end of the array', () => {
        const sortedArray = [1, 3, 5, 7, 9];
        expect(binarySearch(sortedArray, 9)).toBe(4);
    });

    test('should return -1 if the target is not in the array', () => {
        const sortedArray = [1, 3, 5, 7, 9];
        expect(binarySearch(sortedArray, 4)).toBe(-1);
    });

    test('should return -1 for an empty array', () => {
        const emptyArray: number[] = [];
        expect(binarySearch(emptyArray, 5)).toBe(-1);
    });

    test('should work with an array of strings', () => {
        const names = ['Alice', 'Bob', 'Charlie', 'Dave'];
        expect(binarySearch(names, 'Charlie')).toBe(2);
        expect(binarySearch(names, 'Eve')).toBe(-1);
    });

    test('should handle an array with a single element', () => {
        const single = [42];
        expect(binarySearch(single, 42)).toBe(0);
        expect(binarySearch(single, 0)).toBe(-1);
    });
});
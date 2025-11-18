import { quickSort } from './quick-sort';

describe('Quick Sort', () => {
    test('should sort an array of numbers correctly', () => {
        const arr = [8, 3, 5, 4, 7, 6, 1, 2];
        quickSort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('should handle an array with duplicate elements', () => {
        const arr = [5, 2, 8, 2, 9, 5, 1];
        quickSort(arr);
        expect(arr).toEqual([1, 2, 2, 5, 5, 8, 9]);
    });

    test('should handle an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5];
        quickSort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle a reverse-sorted array', () => {
        const arr = [5, 4, 3, 2, 1];
        quickSort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle an array with negative numbers', () => {
        const arr = [3, -1, 0, -5, 2];
        quickSort(arr);
        expect(arr).toEqual([-5, -1, 0, 2, 3]);
    });

    test('should handle an empty array', () => {
        const arr: number[] = [];
        quickSort(arr);
        expect(arr).toEqual([]);
    });
});
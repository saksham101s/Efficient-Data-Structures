import { mergeSort } from './merge-sort';

describe('Merge Sort', () => {
    test('should sort an array of numbers correctly', () => {
        const arr = [8, 3, 5, 4, 7, 6, 1, 2];
        expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('should handle an array with duplicate elements', () => {
        const arr = [5, 2, 8, 2, 9, 5, 1];
        expect(mergeSort(arr)).toEqual([1, 2, 2, 5, 5, 8, 9]);
    });

    test('should handle an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle a reverse-sorted array', () => {
        const arr = [5, 4, 3, 2, 1];
        expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle an array with one element', () => {
        const arr = [42];
        expect(mergeSort(arr)).toEqual([42]);
    });

    test('should handle an empty array', () => {
        const arr: number[] = [];
        expect(mergeSort(arr)).toEqual([]);
    });
});
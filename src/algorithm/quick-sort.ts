/**
 * Partitions the array around a pivot element.
 * Elements smaller than the pivot are moved to the left,
 * and elements greater than the pivot are moved to the right.
 * @param array The array to partition.
 * @param low The starting index.
 * @param high The ending index.
 * @returns The index of the pivot after partitioning.
 */
function partition<T>(array: T[], low: number, high: number): number {
    const pivot = array[high]; // Choosing the last element as the pivot
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            // Swap array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    // Swap array[i+1] and array[high] (or pivot)
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

/**
 * Helper function to recursively perform Quick Sort.
 * @param array The array to sort.
 * @param low The starting index.
 * @param high The ending index.
 */
function quickSortRecursive<T>(array: T[], low: number, high: number): void {
    if (low < high) {
        const partitionIndex = partition(array, low, high);

        // Recursively sort elements before and after partition
        quickSortRecursive(array, low, partitionIndex - 1);
        quickSortRecursive(array, partitionIndex + 1, high);
    }
}

/**
 * Sorts an array of elements using the Quick Sort algorithm.
 * Average time complexity: O(n log n). Worst case: O(n^2).
 * @param array The array to sort.
 * @returns The sorted array (sorted in-place, but returned for chaining).
 */
export function quickSort<T>(array: T[]): T[] {
    // We create a copy to avoid mutating the original array if immutability is desired,
    // but standard QuickSort is often in-place. Here we sort the input array directly.
    // If you want a pure function, uncomment the next line:
    // const arrCopy = [...array]; quickSortRecursive(arrCopy, 0, arrCopy.length - 1); return arrCopy;
    
    quickSortRecursive(array, 0, array.length - 1);
    return array;
}
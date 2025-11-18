/**
 * Performs a binary search on a sorted array to find the index of a target value.
 * Time Complexity: O(log n)
 * Space Complexity: O(1) iterative approach
 * * @param array The sorted array to search.
 * @param target The value to find.
 * @returns The index of the target value if found, otherwise -1.
 */
export function binarySearch<T>(array: T[], target: T): number {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        // Calculate the middle index safely to avoid potential integer overflow
        // though less likely in JS/TS compared to other languages
        const mid = Math.floor(left + (right - left) / 2);

        if (array[mid] === target) {
            return mid; // Target found
        }

        if (array[mid] < target) {
            // If target is greater, ignore left half
            left = mid + 1;
        } else {
            // If target is smaller, ignore right half
            right = mid - 1;
        }
    }

    return -1; // Target not found
}
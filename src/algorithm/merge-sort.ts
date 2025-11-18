/**
 * Merges two sorted arrays into one sorted array.
 * This is the helper function for the mergeSort algorithm.
 * @param left The first sorted array.
 * @param right The second sorted array.
 * @returns A single sorted array containing all elements from left and right.
 */
function merge<T>(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * Sorts an array of elements using the Merge Sort algorithm.
 * It's a stable, efficient, divide-and-conquer sorting algorithm.
 * @param array The array to sort.
 * @returns A new array containing the sorted elements.
 */
export function mergeSort<T>(array: T[]): T[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}
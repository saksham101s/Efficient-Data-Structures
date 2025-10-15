import { BinarySearchTree } from './binary-search-tree';

describe('BinarySearchTree', () => {
    let bst: BinarySearchTree<number>;

    beforeEach(() => {
        bst = new BinarySearchTree<number>();
    });

    test('should insert values correctly and maintain BST property', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);

        // In-order traversal of a BST should yield a sorted array
        expect(bst.inOrderTraversal()).toEqual([3, 5, 7, 10, 15]);
    });

    test('find should return true for existing values', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        expect(bst.find(10)).toBe(true);
        expect(bst.find(5)).toBe(true);
        expect(bst.find(15)).toBe(true);
    });

    test('find should return false for non-existing values', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        expect(bst.find(100)).toBe(false);
        expect(bst.find(1)).toBe(false);
        expect(bst.find(12)).toBe(false);
    });

    test('find on an empty tree should return false', () => {
        expect(bst.find(10)).toBe(false);
    });
    
    test('inOrderTraversal on an empty tree should return an empty array', () => {
        expect(bst.inOrderTraversal()).toEqual([]);
    });

    test('should handle duplicate values by placing them on the right', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(10); // Duplicate
        
        // The structure should be: 10 -> right -> 10, 10 -> left -> 5
        // Traversal will show both values.
        expect(bst.inOrderTraversal()).toEqual([5, 10, 10]);
    });
});

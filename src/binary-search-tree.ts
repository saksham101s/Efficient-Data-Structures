// Represents a single node in the tree
class TreeNode<T> {
    public value: T;
    public left: TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;

    /**
     * Inserts a new value into the BST.
     * @param value The value to insert.
     */
    public insert(value: T): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to recursively find the correct position and insert the node
    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    /**
     * Searches for a value in the BST.
     * @param value The value to find.
     * @returns True if the value is found, otherwise false.
     */
    public find(value: T): boolean {
        return this.findNode(this.root, value);
    }

    // Helper method to recursively search for a value
    private findNode(node: TreeNode<T> | null, value: T): boolean {
        if (node === null) {
            return false;
        }

        if (value < node.value) {
            return this.findNode(node.left, value);
        } else if (value > node.value) {
            return this.findNode(node.right, value);
        } else {
            return true; // value is equal to node's value
        }
    }

    /**
     * Performs an in-order traversal of the tree.
     * Visits nodes in ascending order. (Left, Root, Right)
     * @returns An array of values in ascending order.
     */
    public inOrderTraversal(): T[] {
        const result: T[] = [];
        this.inOrder(this.root, result);
        return result;
    }

    // Helper for in-order traversal
    private inOrder(node: TreeNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
    }

    /**
     * Performs a pre-order traversal of the tree.
     * Visits the root node first, then the left subtree, then the right subtree. (Root, Left, Right)
     * @returns An array of values in pre-order.
     */
    public preOrderTraversal(): T[] {
        const result: T[] = [];
        this.preOrder(this.root, result);
        return result;
    }

    // Helper for pre-order traversal
    private preOrder(node: TreeNode<T> | null, result: T[]): void {
        if (node !== null) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
    }

    /**
     * Performs a post-order traversal of the tree.
     * Visits the left subtree, then the right subtree, then the root node. (Left, Right, Root)
     * @returns An array of values in post-order.
     */
    public postOrderTraversal(): T[] {
        const result: T[] = [];
        this.postOrder(this.root, result);
        return result;
    }

    // Helper for post-order traversal
    private postOrder(node: TreeNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
    }
}


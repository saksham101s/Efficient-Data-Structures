# Efficient Data Structures & Algorithms in TypeScript

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/)
[![NPM Version](https://img.shields.io/npm/v/efficient-data-structures.svg)](https://www.npmjs.com/package/efficient-data-structures)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript library of classic data structures and algorithms, built from scratch with a focus on efficiency, readability, and robust testing.

---

## Features

-   **Linked List**: A dynamic list implementation.
-   **Stack**: A LIFO (Last-In, First-Out) data structure.
-   **Queue**: A FIFO (First-In, First-Out) data structure.
-   **Binary Search Tree**: A sorted tree for fast lookups.
-   **Hash Table**: A key-value store with O(1) average operations.
-   **Fully Typed**: Written entirely in TypeScript for strong type safety.
-   **Fully Tested**: Comprehensive unit tests for all structures using Jest.

---

## Installation

To install the package in your project, run:

```bash
npm install efficient-data-structures
```
Usage & API Examples
Here's how to import and use the data structures in your project.

LinkedList
TypeScript

import { LinkedList } from 'efficient-data-structures';

const list = new LinkedList<string>();

list.append("Hello");
list.prepend("First");
list.append("World");

console.log(list.toArray()); // Output: ['First', 'Hello', 'World']
console.log(list.getSize());   // Output: 3
Stack
TypeScript

import { Stack } from 'efficient-data-structures';

const stack = new Stack<number>();

stack.push(10);
stack.push(20);

console.log(stack.pop());   // Output: 20
console.log(stack.peek());  // Output: 10
Queue
TypeScript

import { Queue } from 'efficient-data-structures';

const queue = new Queue<string>();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.dequeue()); // Output: "A"
console.log(queue.peek());    // Output: "B"
Binary Search Tree
TypeScript

import { BinarySearchTree } from 'efficient-data-structures';

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.find(5)); // Output: TreeNode { value: 5, ... }
console.log(bst.inOrderTraversal()); // Output: [5, 10, 15]
Hash Table
TypeScript

import { HashTable } from 'efficient-data-structures';

const hashTable = new HashTable<string>();

hashTable.set("name", "Alice");
hashTable.set("country", "Canada");

console.log(hashTable.get("name")); // Output: "Alice"
hashTable.delete("country");
console.log(hashTable.get("country")); // Output: null
Running Tests
To run the test suite for this project locally, clone the repository and run:

Bash

# Install dependencies
npm install

# Run tests
npm test
License
This project is licensed under the MIT License.


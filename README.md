# 🚀 Efficient Data Structures & Algorithms in TypeScript

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/saksham101s/Efficient-Data-Structures)
[![NPM Version](https://img.shields.io/npm/v/efficient-data-structures.svg)](https://www.npmjs.com/package/efficient-data-structures)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A **TypeScript library** of classic **data structures and algorithms**, built from scratch with a focus on **efficiency**, **readability**, and **robust testing**.

---

## ✨ Features

- 🧩 **Linked List** — A dynamic list implementation  
- 🧱 **Stack** — LIFO (Last-In, First-Out) data structure  
- ⚙️ **Queue** — FIFO (First-In, First-Out) data structure  
- 🌳 **Binary Search Tree** — Sorted tree for efficient lookups  
- 🔑 **Hash Table** — Key-value store with O(1) average operations  
- 💪 **Fully Typed** — 100% TypeScript for strong type safety  
- 🧪 **Fully Tested** — Comprehensive unit tests using Jest  

---

## 📦 Installation

Install the package using **npm**:

```bash
npm install efficient-data-structures
```

Or using **yarn**:

```bash
yarn add efficient-data-structures
```

---

## 🧠 Usage & API Examples

### 🔹 Linked List

```typescript
import { LinkedList } from 'efficient-data-structures';

const list = new LinkedList<string>();

list.append("Hello");
list.prepend("First");
list.append("World");

console.log(list.toArray()); // ['First', 'Hello', 'World']
console.log(list.getSize()); // 3
```

---

### 🔹 Stack

```typescript
import { Stack } from 'efficient-data-structures';

const stack = new Stack<number>();

stack.push(10);
stack.push(20);

console.log(stack.pop());  // 20
console.log(stack.peek()); // 10
```

---

### 🔹 Queue

```typescript
import { Queue } from 'efficient-data-structures';

const queue = new Queue<string>();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.dequeue()); // "A"
console.log(queue.peek());    // "B"
```

---

### 🔹 Binary Search Tree

```typescript
import { BinarySearchTree } from 'efficient-data-structures';

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.find(5)); // TreeNode { value: 5, ... }
console.log(bst.inOrderTraversal()); // [5, 10, 15]
```

---

### 🔹 Hash Table

```typescript
import { HashTable } from 'efficient-data-structures';

const hashTable = new HashTable<string>();

hashTable.set("name", "Alice");
hashTable.set("country", "Canada");

console.log(hashTable.get("name")); // "Alice"
hashTable.delete("country");
console.log(hashTable.get("country")); // null
```

---

## 🧪 Running Tests

Clone the repository and run the test suite locally:

```bash
# Clone the repo
git clone https://github.com/saksham101s/Efficient-Data-Structures.git

# Navigate into the project
cd Efficient-Data-Structures

# Install dependencies
npm install

# Run Jest tests
npm test
```

---

## 🧮 Tech Stack

- **Language:** TypeScript  
- **Testing:** Jest  
- **Package Manager:** npm / yarn  

---

## 📁 Project Structure

```
Efficient-Data-Structures/
├── src/
│   ├── binary-search-tree.ts
│   ├── hash-table.ts
│   ├── linked-list.ts
│   ├── queue.ts
│   └── stack.ts
├── dist/                # Compiled output
├── jest.config.js       # Jest configuration
├── tsconfig.json        # TypeScript configuration
├── package.json
└── README.md
```

---

## 📝 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 💡 Author

**Saksham Upreti**  
👨‍💻 [GitHub](https://github.com/saksham101s) • 🧠 Data Structures & Algorithms • ⚡ TypeScript Enthusiast

---

⭐ **If you find this project helpful, please give it a star on GitHub!**

npm test
License
This project is licensed under the MIT License.


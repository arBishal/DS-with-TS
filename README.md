# Data Structure with TypeScript

This project implements popular data structures in TypeScript. Each data structure is encapsulated in its own module, providing a clear and organized way to manage the code.

## Data Structures

### Linked List
- **LinkedList**: A class that implements methods for adding, removing, and traversing nodes in a linked list.
- **Node**: A class that represents a single node in the linked list, containing data and a reference to the next node.

## Usage
To use these data structures, import the desired class from its respective module and create an instance. For example:

```typescript
import { LinkedList } from './linkedList/LinkedList';

const list = new LinkedList();
list.add(1);
list.add(2);
```

## Installation
To install the necessary dependencies, run:

```bash
npm install
```
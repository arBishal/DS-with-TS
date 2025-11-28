import { LinkedList } from './linked-list/LinkedList';

// Example usage of LinkedList
const linkedList = new LinkedList();

linkedList.insertAtEnd(0);
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(8);
console.log('List elements:', linkedList.traverse()); // [0, 3, 8]

linkedList.removeFromEnd();
console.log('List elements after removal:', linkedList.traverse()); // [0, 3]

linkedList.insertAtPosition(1, 1);
linkedList.insertAtPosition(3, 4);
console.log('List elements after inserting 1 at position 1:', linkedList.traverse()); // [0, 1, 3, 4]

linkedList.removeFromPosition(2);
console.log('List elements after removing from position 2:', linkedList.traverse()); // [0, 1, 4]

console.log('Size of the list:', linkedList.getSize()); // 2
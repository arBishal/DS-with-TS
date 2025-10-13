import { LinkedList } from './linkedList/LinkedList';
import { Stack } from './stack/Stack';
import { Queue } from './queue/Queue';
import { HashMap } from './map/HashMap';

// Example usage of LinkedList
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
console.log('Linked List:', linkedList.traverse());

// Example usage of Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log('Stack Top:', stack.peek());
console.log('Popped from Stack:', stack.pop());

// Example usage of Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log('Queue Front:', queue.peek());
console.log('Dequeued from Queue:', queue.dequeue());

// Example usage of HashMap
const hashMap = new HashMap();
hashMap.set('key1', 'value1');
console.log('HashMap Get:', hashMap.get('key1'));
hashMap.remove('key1');
// defining the node

class ListNode<T> {
    public value: T;
    next?: ListNode<T>;
    constructor(value: T) {
        this.value = value;
    }
}

// implementing the linked list

export class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private size = 0;

    // get number of elements
    getSize() {
        return this.size;
    }

    // traverse the list
    traverse() {
        const elements: T[] = [];
        let current = this.root;
        while(current) {
            elements.push(current.value);
            current = current.next;
        }
        return elements;
    }

    // insert a new node to the end of the list
    insertAtEnd(value: T) {
        const node = new ListNode(value);
        if(!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    // remove the last node
    removeFromEnd() {
        if(!this.root) {
            throw new Error("List is empty");
        }
        if(this.root === this.tail) {
            this.root = undefined;
            this.tail = undefined;
        } else {
            let current = this.root;
            while(current.next && current.next !== this.tail) {
                current = current.next;
            }
            current.next = undefined;
            this.tail = current;
        }
    }

    // insert a new node at nth position
    insertAtPosition(value: T, position: number) {
        if (position < 0 || position > this.size) {
            throw new Error("Invalid position.");
        }

        const node = new ListNode(value);

        if (position === 0) {
            // inserting at the head
            node.next = this.root;
            this.root = node;
            if (this.size === 0) {
                this.tail = node;
            }
        } else {
            // ensure list state is valid for traversal
            let prev = this.root;
            if (!prev) {
                throw new Error("List is in invalid state");
            }

            // move prev to the node at index position - 1
            for (let i = 0; i < position - 1; i++) {
                if (!prev.next) {
                    throw new Error("List is in invalid state");
                }
                prev = prev.next;
            }

            // insert after prev
            node.next = prev.next;
            prev.next = node;

            // if we inserted at the end, update tail
            if (prev === this.tail) {
                this.tail = node;
            }
        }

        this.size++;
    }

    removeFromPosition(position: number) {
        if(position < 0 || position > this.size) {
            throw new Error("Invalid position.")
        }

        // removing from head
        if(position === 0) {
            if(!this.root) {
                throw new Error("No elements to remove.");
            }
            const removed = this.root;
            this.root = this.root.next;
            if(this.size === 1) {
                this.tail = undefined;
            }
            this.size--;
            return removed.value;
        }

        // remove from middle or end
        let prev = this.root;
        if(!prev) {
            throw new Error("List is in invalid state");
        }
        for(let i = 0; i < position - 1; i++) {
            if(prev.next) {
                prev = prev.next;
            }
        }

        const removed = prev.next;
        if(removed) {
            prev.next = removed.next;
            if(removed === this.tail) {
                this.tail = prev;
            }
            this.size--;
            return removed.value;
        }
    }
}
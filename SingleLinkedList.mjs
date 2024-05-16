class ListNode {
    constructor(value) {
         this.next = null;
         this.value = value;
    }
}

class SingleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /** Add section */
    append(value) {
        if(!value) {
            // should throw an error :)
            return;
        }
        const newNode = new ListNode(value);
        if(!this.head) {
            this.head = newNode;
            this.length++;
            return;
        }
        const tail = this.tail;
        tail.next = newNode;
        this.tail = tail.next;
        this.length++;
    }

    prepend(value) {
        if(!value) {
            return;
        }
        const newNode = new ListNode(value);
        if(!this.head) {
            this.head = newNode;
            this.length++;
            return;
        }
        const head = this.head;
        newNode.next = head;
        this.head = newNode;
        if(!this.tail) {
            this.tail = head;
        }
        this.length++;
    }

    remove(value) {
        if(!value || !this.head) {
            return;
        }

        let current = [this.head];
        let prev = [null];

        while(current.length > 0) {
            const node = current.pop();
            const prevNode = prev.pop();

            if(node.value === value) {
                if(prevNode) {
                    if(node.next === null) {
                        this.tail = prevNode;
                    }
                    prevNode.next = node.next;
                } else {
                    this.head = null;
                    this.tail = null;
                }
                this.length--;
                return true;
            }

            if(node.next) {
                current.push(node.next);
                prev.push(node);
            }
        }

        return false;
    }

    /** Search section  */
    find(value) {
        if(!value || !this.length) {
            return;
        }

        const current = [this.head];

        while (current.length) {
            const node = current.pop();
            if(node.value === value) {
                return true;
            }
            if(node.next) {
                current.push(node.next);
            }
        }
        return false;
    }

    /** Other getters and methods  */
    size() {
        return this.length;
    }

    /** clears the List, returns this.length */
    clear() {
        if(!this.length) {
            return this.length;
        }

        this.head = null;
        this.tail = null;
        this.length = 0;
        return this.length;
    }
}

const list = new SingleLinkedList();
list.prepend(100) // insert as a root
list.prepend(200) // insert as a root
list.append(300) // insert as a root
list.clear()
console.dir(list, { depth: null })


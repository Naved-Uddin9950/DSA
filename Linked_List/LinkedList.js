class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor(data) {
        const head = new Node(data);
        this.head = head;
    }

    append(data) {
        const node = new Node(data);
        let current = this.head;

        if(current.next === null) {
            current.next = node;
        } else {
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    prepend(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    print() {
        let res = '';
        let current = this.head;
        while(current !== null) {
            res += `${current.data}`;
            current = current.next;
            if(current !== null) {
                res += ' -> ';
            }
        }
        console.log(res);
    }
}

const list = new List(2);

// insert data at ending position of the linked list
list.append(3);
list.append(4);
list.append(6);

// insert data at starting position of the linked list
list.prepend(1);
list.prepend(0);

// Print the linked list
list.print();
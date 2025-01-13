class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let follow = this.head;
      this.head = new Node(value);
      this.head.next = follow;
    }
  }

  size() {
    if (!this.head) {
      return 0;
    } else {
      let current = this.head;
      let count = 1;
      while (current.next) {
        count++;
        current = current.next;
      }
      return count;
    }
  }

  getHead() {
    if (!this.head) {
      return "Sorry no head exists";
    } else {
      return this.head;
    }
  }

  tail() {
    if (!this.head) {
      return "Sorry no nodes exist";
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    }
  }

  at(index) {
    if (index === 0) {
      return this.getHead();
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        if (current && current.next) {
          current = current.next;
        } else {
          current = null;
        }
      }
      if (current === null) {
        return "Sorry, the list ends before this index.";
      } else return current;
    }
  }

  pop() {
    let last = this.size();
    let secondToLast = this.at(last - 2);
    secondToLast.next = null;
  }

  contains(value) {
    if (!this.head) {
      return "Sorry no data exists";
    } else {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        } else current = current.next;
      }
      return false;
    }
  }

  find(value) {
    if (!this.contains(value)) {
      return null;
    } else {
      let size = this.size();
      let current = this.head;
      for (let i = 0; i < size; i++) {
        if (current.value === value) {
          return i;
        } else current = current.next;
      }
    }
  }

  toString() {
    let output = "";
    if (!this.head) {
      output = "No nodes exist";
      return output;
    } else {
      let current = this.head;
      while (current) {
        output += `(${current.value}) -> `;
        current = current.next;
      }
      return output;
    }
  }
}

let list = new LinkedList();

console.log(list.toString());

list.append("2");

console.log(list.toString());

list.append("3");

console.log(list.toString());

list.prepend("1");

console.log(list.toString());

list.append("4");

console.log(list.toString());

console.log(list);

// 1. Array-based Stack
class ArrayStack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    printStack() {
      console.log(this.items.join(" "));
    }
  }
  
  // 2. Array-based Queue
  class ArrayQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    printQueue() {
      console.log(this.items.join(" "));
    }
  }
  
  // 3. Linked List Node
  class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // 4. Linked List-based Queue
  class LinkedListQueue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    enqueue(value) {
      const newNode = new LinkedListNode(value);
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
      if (!this.head) {
        this.head = newNode;
      }
    }
  
    dequeue() {
      if (!this.head) {
        return "Queue is empty";
      }
      const removedValue = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return removedValue;
    }
  
    peek() {
      if (!this.head) {
        return "Queue is empty";
      }
      return this.head.value;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    clear() {
      this.head = null;
      this.tail = null;
    }
  
    printQueue() {
      let current = this.head;
      const elements = [];
      while (current) {
        elements.push(current.value);
        current = current.next;
      }
      console.log(elements.join(" "));
    }
  }
  
  // 5. Linked List-based Stack
  class LinkedListStack {
    constructor() {
      this.head = null;
    }
  
    push(value) {
      const newNode = new LinkedListNode(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    pop() {
      if (!this.head) {
        return "Stack is empty";
      }
      const removedValue = this.head.value;
      this.head = this.head.next;
      return removedValue;
    }
  
    peek() {
      if (!this.head) {
        return "Stack is empty";
      }
      return this.head.value;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    clear() {
      this.head = null;
    }
  
    printStack() {
      let current = this.head;
      const elements = [];
      while (current) {
        elements.push(current.value);
        current = current.next;
      }
      console.log(elements.join(" "));
    }
  }
  
  // Example usage:
  
  // Array-based Stack
  const arrayStack = new ArrayStack();
  arrayStack.push(10);
  arrayStack.push(20);
  console.log(arrayStack.pop()); 
  arrayStack.printStack();       
  
  // Array-based Queue
  const arrayQueue = new ArrayQueue();
  arrayQueue.enqueue(10);
  arrayQueue.enqueue(20);
  console.log(arrayQueue.dequeue()); 
  arrayQueue.printQueue();           
  
  // Linked List-based Queue
  const linkedListQueue = new LinkedListQueue();
  linkedListQueue.enqueue(10);
  linkedListQueue.enqueue(20);
  console.log(linkedListQueue.dequeue()); 
  linkedListQueue.printQueue();          
  
  // Linked List-based Stack
  const linkedListStack = new LinkedListStack();
  linkedListStack.push(10);
  linkedListStack.push(20);
  console.log(linkedListStack.pop()); 
  linkedListStack.printStack();     
  
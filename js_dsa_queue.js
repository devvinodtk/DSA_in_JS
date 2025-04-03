class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(ele) {
    this.queue.push(ele);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty.";

    this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty.";

    return this.queue[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  print() {
    this.queue.forEach((val) => console.log(val));
  }

  size() {
    return this.queue.length;
  }
}

/*

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(6);
myQueue.enqueue(9);
myQueue.enqueue(1);


console.log("The queue elements are: ", myQueue.print());

myQueue.dequeue();

console.log("The queue elements after pop-1 are: ", myQueue.print());

console.log("The element in the front is ", myQueue.peek());

***/

// Implement the circular queue.

var MyCircularQueue = function (k) {
  this.circularQueue = [];
  this.size = k;
};

MyCircularQueue.prototype.enQueue = function (ele) {
  if (this.size === this.circularQueue.length) return false;
  this.circularQueue.push(ele);
  return true;
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.circularQueue.length === 0) return false;
  this.circularQueue.shift();
  return true;
};

MyCircularQueue.prototype.Front = function () {
  if (this.circularQueue.length === 0) return -1;
  return this.circularQueue[0];
};

MyCircularQueue.prototype.Rear = function () {
  if (this.circularQueue.length === 0) return -1;
  return this.circularQueue[this.circularQueue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.circularQueue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
  return this.circularQueue.length === this.size;
};

/*
var obj = new MyCircularQueue(3);
obj.enQueue(1);
obj.enQueue(4);
obj.enQueue(2);
obj.deQueue();
obj.enQueue(5);
obj.deQueue();
obj.enQueue(72);

console.log(obj.Front(), obj.Rear());
*/

// Impelement stack using using queue.

var MyStack = function () {
  q1 = [];
  q2 = [];
};

// x - 4
//q1 - [4, 2, 3, 5]
//q2 - []

MyStack.prototype.push = function (x) {
  while (this.q1.length !== 0) {
    this.q2.push(this.q1.shift());
  }
  this.q1.push(x);
  while (this.q2.length !== 0) {
    this.q1.push(this.q2.shift());
  }
};

MyStack.prototype.pop = function () {
  return this.q1.shift();
};

MyStack.prototype.top = function () {
  return this.q1[0];
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Create a LinkedList constructor function
  Each Linked list will have 2 properties: head and tail.
  Initialize it to null since when we create a LinkedList it will be empty.

 */
function LinkedList() {
  this.head = null;
  this.tail = null;
}

/**
  Create a Node constructor function.
  Each node will have 3 properties. value, next and prev
 */
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  // create a new node with value and
  // next pointing to current element in the linked list and
  // prev pointing to null since this is the head node.
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  const value = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return value;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail.prev) return null;
  const value = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return value;
};

LinkedList.prototype.search = function (searchVal) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchVal) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function (value) {
  var currentNode = this.head;
  const indexArray = [];
  let currentIndex = 0;

  while (currentNode) {
    if (currentNode.value === value) indexArray.push(currentIndex);
    currentNode = currentNode.next;
    currentIndex += 1;
  }
  return indexArray;
};
var ll = new LinkedList();
ll.addToTail("one");
ll.addToTail("two");
ll.addToTail("three");
ll.addToTail("one");

console.log(ll);

const result = ll.search("four");
console.log(`result ===> ${result}`);

console.log(ll.indexOf("one"));

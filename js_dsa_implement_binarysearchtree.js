function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  if (order === "pre-order") iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === "in-order") iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === "post-order") iteratorFunc(this.value);
};

const bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst);

const val = 85;
console.log(`The tree contains ${val}:${bst.contains(val)}`);

console.log(bst.depthFirstTraversal(log, "post-order"));

function log(val) {
  console.log(val);
}

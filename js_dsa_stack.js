class Stack {
  constructor() {
    this.stack = [];
  }

  push(params) {
    this.stack.push(params);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
// console.log("Is stack empty ? => ", stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// console.log("Element on top is => ", stack.peek());

// console.log("Removing element on top", stack.pop());

// console.log("Element on top is => ", stack.peek());

// console.log("Is stack Empty ? => ", stack.isEmpty());

// Q 1. Given an input string s, reverse the order of the words
// Input: "the sky is blue"     -------->>>>>>      Output: "blue is sky the"

const reverseWords = (word) => {
  const wordArr = word.split(" ");
  let result = "";
  for (let i = wordArr.length - 1; i >= 0; i--) {
    result += wordArr[i] + " ";
  }

  return result.trim();
};

// console.log(reverseWords("the sky is blue"));

//Q 2. Given a string s containing just characters '(' , ')', '{', '}', '[' and ']'
// determine if the input string is valid.

// Input: "()"          --------->>>>>>>>   Output: true
// Input: "([]{})"          --------->>>>>>>>   Output: true
// Input: "(]"          --------->>>>>>>>   Output: false

const validateParanthesis = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(" || (char === "[") | (char === "{")) {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(validateParanthesis("([]{})"));

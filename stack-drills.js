class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function populateShip() {
  const starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  peek(starTrek);
  isEmpty(starTrek);
  display(starTrek);
}

populateShip();

function peek(ll) {
  if (ll.top === null) {
    console.log(`Nothing to see`);
  }
  console.log(ll.top);
}

function isEmpty(ll) {
  if (ll.top === null) {
    console.log("stack is empty");
  }
  console.log("stack as at least 1 item");
}

function display(ll) {
  let currNode = ll.top;
  if (currNode === null) {
    console.log("nothing to display");
  }
  while (currNode !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

// function is_palindrome(s) {
//   s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

//   let count = 0;
//   let currNode = ll.top;

//   if (currNode === null) {
//     return null;
//   }

//   while (currNode !== null) {
//     count++;
//     curNode = currNode.next;
//   }
//   const size = count;

//   for(i = 0; i < count %2; i++) {
//     if ()
//   }
// }

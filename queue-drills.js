class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function populateShip() {
  const StarTrekQ = new Queue();
  StarTrekQ.enqueue("Kirk");
  StarTrekQ.enqueue("Spock");
  StarTrekQ.enqueue("Uhura");
  StarTrekQ.enqueue("Sulu");
  StarTrekQ.enqueue("Checkov");
  //peek(StarTrekQ);
  //isEmpty(StarTrekQ);
  display(StarTrekQ);
}

populateShip();

function peek(ll) {
  const first = ll.first;
  console.log(first);
}

function isEmpty(ll) {
  if (ll.first == null) {
    console.log("is empty");
  }
}

function display(ll) {
  let currNode = ll.first;

  if (currNode == null) {
    return null;
  }

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

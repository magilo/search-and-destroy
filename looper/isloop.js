'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let storage = [];
  let firstVal = linkedlist.head.value
  storage.push(firstVal)
  let nextNode = linkedlist.head.next

  while (nextNode) {
    let currNode = nextNode;
    let currVal = currNode.value
    if (storage.includes(currVal)) {
      return true;
    } else {
      storage.push(currVal)
    }
    nextNode = currNode.next;
  }

  return false;

};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop

'use strict';

//Complete this algo
const isLoop = (linkedlist, array = []) => {
  array.push(linkedlist.head.value)
console.log('array', array)
  if(linkedlist.head.next === null) return false
  else if(array.includes(linkedlist.head.next.value)) return true
  else {
    linkedlist.head = linkedlist.head.next
    console.log('new head node', linkedlist)
    return isLoop(linkedlist, array)
  }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop

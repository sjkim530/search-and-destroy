'use strict';

// Complete this algo
const minJumps = (arr, jumpIdx = 0, counter = 0) => {
   let biggestValue = 0;
   let tempIdx = 0

   for(let i = 1; i <= arr[jumpIdx]; i++){
     if(biggestValue < arr[jumpIdx + i] + i) {
       biggestValue = arr[jumpIdx + i] + i;
       tempIdx = jumpIdx + i
     }
   }
   counter++;

   if(jumpIdx + arr[jumpIdx] >= arr.length - 1) {
     return counter
   } else {
     return minJumps(arr, tempIdx, counter)
   }
};

module.exports = minJumps

//check value of arr[0]
//loop

//------------------------------
//    ASYNC IN JAVASCRIPT
//------------------------------

// Sync Function : Together, one after the other, Only one task is happening at a time

// Async Function : Opposite of Sync, Happens in parts, Multiple things are context switching with each other

function findSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

function sleep() {
  let a = 0;
  for (let i = 0; i < 10000000000; i++) {
    a++;
  }
}

function sumTill100() {
  console.log("Logging Result with async call : ", findSum(100));
}

// Synchronous
console.log("Sum till 10 : ", findSum(10));
sleep();
console.log("Hello Everyone");

// Calling an async function
setTimeout(sumTill100, 1000);
console.log("Hey There");

// Note : if multiple js async task is running simultaniously then the task which got executed first
// will be first to get run when thread will be free.

// Promise in javascript

function myOwnAsyncFn(callback, duration) {
  setTimeout(callback, duration);
}

function myOwnPromiseFn(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Inside Promisified Function!");
      resolve();
    }, duration);
  });
  return p;
}

myOwnAsyncFn(function () {
  console.log("Called Async Function");
}, 2000);

let ans = myOwnPromiseFn(2000);
console.log(
  ans.then(function () {
    console.log("Promise Resolved!");
  })
);

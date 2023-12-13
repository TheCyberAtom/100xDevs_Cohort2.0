// Asynchronous Function

// Code to understand the working of async function in js.
console.log("Start");

setTimeout(function () {
  console.log("1st async fn");
}, 20000);

console.log("Middle");

setTimeout(function () {
  console.log("2nd async fn");
}, 8000);

console.log("end");

// Execution output of above code :
// start -> Middle -> end -> 2nd async fn -> 1st async fn

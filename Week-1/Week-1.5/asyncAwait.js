//--------------------------------
//    Async-Await IN JAVASCRIPT
//--------------------------------

// Asynchronous Function
function parentAsyncFunction() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("data is here!");
    }, 2000);
  });
}

// Working of Async Await
async function main() {
  let value = parentAsyncFunction();
  console.log(value); // Promise { 'data is here!' }
  let value2 = await parentAsyncFunction();
  console.log(value2); // data is here!
  console.log("Hi There!"); // This will be executed after await is done
}
main();
console.log("After Main"); // This will execute first cause thread paused for await to be done

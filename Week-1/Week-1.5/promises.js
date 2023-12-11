//------------------------------
//    PROMISES IN JAVASCRIPT
//------------------------------

const fs = require("fs");

// Asynchronous Function
function fnToReadFile() {
  return new Promise(function (resolve) {
    console.log("Inside Promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

fnToReadFile().then(onDone);

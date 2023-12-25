const express = require("express");
const app = express();
const port = 3000;

function calculateSum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

app.get("/", (req, res) => {
  const n = req.query.n;
  let result = calculateSum(n);
  let ans = "Sum of " + n + " = " + result;
  res.send(ans); // Always send a string
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

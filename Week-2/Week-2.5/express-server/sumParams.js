const express = require("express");
const app = express();
const port = 3001;

function calculateSum(a, b) {
  return a + b;
}

app.get("/", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  let result = calculateSum(a, b);
  let ans = "Sum of " + a + " and" + b + " = " + result;
  res.send(ans);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

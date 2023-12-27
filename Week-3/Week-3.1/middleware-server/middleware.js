const express = require("express");
const app = express();
const port = 3000;

function userMiddleware(req, res, next) {
  let username = req.headers.username;
  let password = req.headers.password;
  if (username !== "rahul" && password !== "pass") {
    res.status(403).json({
      msg: "Incorrect Inputs.",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  let kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect Kidney Inputs.",
    });
  } else {
    next();
  }
}

// app.use(userMiddleware); //This will work same as passing middleware to get/post .. function
app.use(express.json()); // It tells that coming body will be json.

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  let bodycontent = req.body;
  console.log(bodycontent);
  res.send("Your heart is healthy!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

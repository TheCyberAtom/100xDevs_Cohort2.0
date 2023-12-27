const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", (req, res) => {
  res.send("Your heart is healthy!");
});

// global catches - define at the end of all the request :: Error Handling middleware
app.use((err, req, res, next) => {
  res.json({
    msg: "Sorry, Something went wrong!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.json());

// Sending post request with body and parsing using body parser
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Output response!");
});

// // Sending post request and logging headers
// app.post("/conversation", (req, res) => {
//   console.log(req.headers);
//   res.send({
//     msg: "2 + 2 = 4",
//   });
// });

// Getting response as html element
// app.get("/", (req, res) => {
//   res.send(`<b>Hello There! </b>`);
// });

// Getting string response
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

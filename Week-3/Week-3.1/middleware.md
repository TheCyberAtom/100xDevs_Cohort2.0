# Express Middleware and Zod Validation

## 1. Middleware for User and Kidney Check

### Definition:

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. They can modify the request and response objects, end the request-response cycle, and call the next middleware in the stack.

### Code Snippet:

```javascript
// Importing the express module
const express = require("express");

// Creating an instance of the express application
const app = express();

// Setting the port number for the server
const port = 3000;

// Middleware for user authentication
function userMiddleware(req, res, next) {
  // Extracting username and password from request headers
  let username = req.headers.username;
  let password = req.headers.password;

  // Checking if username and password match expected values
  if (username !== "rahul" && password !== "pass") {
    // Responding with a 403 Forbidden status and a JSON message if authentication fails
    res.status(403).json({
      msg: "Incorrect Inputs.",
    });
  } else {
    // Calling the next middleware in the stack if authentication is successful
    next();
  }
}

// Middleware for kidney check
function kidneyMiddleware(req, res, next) {
  // Extracting kidneyId from request query parameters
  let kidneyId = req.query.kidneyId;

  // Checking if kidneyId matches expected values
  if (kidneyId != 1 && kidneyId != 2) {
    // Responding with a 403 Forbidden status and a JSON message if kidney check fails
    res.status(403).json({
      msg: "Incorrect Kidney Inputs.",
    });
  } else {
    // Calling the next middleware in the stack if kidney check is successful
    next();
  }
}

// Using middleware to parse JSON in the request body
app.use(express.json());

// Defining a route for health checkup with user and kidney middleware
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  // Extracting the body content from the request
  let bodycontent = req.body;
  // Logging the body content to the console
  console.log(bodycontent);
  // Sending a response indicating a healthy heart
  res.send("Your heart is healthy!");
});

// Defining a fallback route for health checkup (without middleware)
app.get("/health-checkup", (req, res) => {
  // Sending a response indicating a healthy heart
  res.send("Your heart is healthy!");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  // Responding with a JSON message for any unhandled errors
  res.json({
    msg: "Sorry, Something went wrong!",
  });
});

// Setting up the server to listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

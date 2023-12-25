# Express Server Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Setting Up the Server](#setup)
3. [Endpoints](#endpoints)
   - [GET / - Retrieve Patient Information](#get-endpoint)
   - [POST / - Add a New Kidney](#post-endpoint)
   - [PUT / - Mark All Kidneys as Healthy](#put-endpoint)
   - [DELETE / - Remove Unhealthy Kidneys](#delete-endpoint)

---

## 1. Introduction <a name="introduction"></a>

This Express server provides functionality related to managing patient kidney information.

---

## 2. Setting Up the Server <a name="setup"></a>

The server is set up using the following code:

```javascript
// express-server/index.js

const express = require("express");
const app = express();
const port = 3000;

// ... (Middleware and user data setup)

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// express-server/index.js
app.get("/", (req, res) => {
  // ... (GET endpoint code)
});

// express-server/index.js
app.post("/", (req, res) => {
  // ... (POST endpoint code)
});

// express-server/index.js
app.put("/", (req, res) => {
  // ... (PUT endpoint code)
});

// express-server/index.js
app.delete("/", (req, res) => {
  // ... (DELETE endpoint code)
});
```

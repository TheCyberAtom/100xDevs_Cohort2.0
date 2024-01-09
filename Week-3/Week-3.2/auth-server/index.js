const express = require("express");
const jwt = require("jsonwebtoken");

const jwtSecret = "shhhhh"; // Secret key for JWT signing
const app = express();

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "Harkirat Singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman Singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya Kumari",
  },
];

// Function to check if the user exists in ALL_USERS array
function userExists(username, password) {
  return ALL_USERS.some(
    (user) => user.username === username && user.password === password
  );
}

// Endpoint for user sign-in
app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in-memory database",
    });
  }

  // Sign a JWT with the user's username
  const token = jwt.sign({ username: username }, jwtSecret);
  return res.json({
    token,
  });
});

// Endpoint to get a list of users (excluding the current user)
app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    // Verify the JWT
    const decoded = jwt.verify(token, jwtSecret);
    const username = decoded.username;

    // Filter out the current user from the user list
    const otherUsers = ALL_USERS.filter((user) => user.username !== username);

    return res.json({
      users: otherUsers,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

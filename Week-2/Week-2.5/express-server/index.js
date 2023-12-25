const express = require("express");
const app = express();
const port = 3000;

// Initial user data
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

// Middleware to parse JSON
app.use(express.json());

// GET endpoint to retrieve patient kidney information
app.get("/", (req, res) => {
  // Fetch the user and kidney information
  const patient = users[0];
  const patientName = patient.name;
  const noOfKidneys = patient.kidneys.length;

  // Count the number of healthy and non-healthy kidneys
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < noOfKidneys; i++) {
    if (patient.kidneys[i].healthy) {
      noOfHealthyKidneys++;
    }
  }

  const noOfNonHealthyKidneys = noOfKidneys - noOfHealthyKidneys;

  // Send the response
  res.json({
    patientName,
    noOfKidneys,
    noOfHealthyKidneys,
    noOfNonHealthyKidneys,
  });
});

// POST endpoint to add a new kidney
app.post("/", (req, res) => {
  // Check if the request body has the required property
  if (req.body.isHealthy !== undefined) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
      healthy: isHealthy,
    });
    res.json({
      msg: "Done!",
    });
  } else {
    // If isHealthy is not provided in the request body, send an error response
    res.status(400).json({
      error: "Missing 'isHealthy' property in the request body.",
    });
  }
});

// PUT endpoint to mark all kidneys as healthy
app.put("/", (req, res) => {
  // Update all kidneys to be healthy
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "All Kidneys are healthy now!",
  });
});

// DELETE endpoint to remove unhealthy kidneys
app.delete("/", (req, res) => {
  // Filter out unhealthy kidneys
  const newKidneys = users[0].kidneys.filter((kidney) => kidney.healthy);
  users[0].kidneys = newKidneys;
  res.json({
    msg: "Delete Success for unhealthy kidneys!",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

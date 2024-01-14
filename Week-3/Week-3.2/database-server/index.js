const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://darkhood:Rahul518812@cluster0.n1l7nuy.mongodb.net/user_app"
);

const UserModel = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await UserModel.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send("User Already Exists");
  }

  const user = UserModel({
    name: "Rahul",
    email: "test@gmail.com",
    password: "123",
  });

  user.save();

  res.json({
    msg: "User Added Successfully",
  });
});

app.listen(3000);

const express = require("express");
const cors = require("cors");
const User = require("./User.js");
const Request = require("./Request");
require("./db");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Register User
app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User Registered" });
  } catch (err) {
    res.json({ error: err });
  }
});

// Login User
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) return res.json({ error: "Invalid Credentials" });
  res.json({ message: "Login Success" });
});

// Create Pickup Request
app.post("/request", async (req, res) => {
  const reqData = new Request(req.body);
  await reqData.save();
  res.json({ message: "Pickup Request Submitted" });
});

// Get All Requests (Admin)
app.get("/requests", async (req, res) => {
  const data = await Request.find();
  res.json(data);
});

app.listen(5000, () => console.log("Server running on 5000"));

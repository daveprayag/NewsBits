const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const News = require("./models/news.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 1337;

mongoose.connect("mongodb://localhost:27017/newsbits", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({
      status: "error",
      error: "Email already in use.",
    });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ ststus: "error", user: true });
  }
});

app.get("/api/home", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "invalid token" });
  }

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ ststus: "error", user: true });
  }
});

app.get("/api/news", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occured" });
  }
});

app.get("/api/news", (req, res) => {
  const category = req.query.category;

  News.find({ Category: category })
    .then((news) => {
      res.json(news);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
    });
});

app.listen(PORT, () => console.log("Server running on port " + PORT));

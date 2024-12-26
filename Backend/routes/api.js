const express = require("express");
const { User } = require("../models/index");
const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
});

module.exports = router;

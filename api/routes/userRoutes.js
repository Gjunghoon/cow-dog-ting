const express = require("express");
const router = express.Router();
const User = require("../models/User").User;

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

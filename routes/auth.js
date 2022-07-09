const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const username = req.body?.username;
    const email = req.body?.email;
    const password = req.body?.password;

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const query = {
      username: username,
      email: email,
      password: hashedPass,
    };

    const newUser = new User(query);

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const email = req.body?.email;
    const password = req.body?.password;

    const getUser = await User.findOne({ email: email });
    !getUser && res.status(400).json("Email  address doesn't match!");

    const validate = await bcrypt.compare(password, getUser.password);
    !validate && res.status(400).json("Password doesn't matched!");

    res.status(200).json(getUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;

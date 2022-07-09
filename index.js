const express = require("express");
const app = express();
const port = process.env.Port || 8000;

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend server connected!");
});

app.listen(port, () => {
  console.log("Backend is running!");
});

// blogVerse
// 6rshq7SQHGlM5stz

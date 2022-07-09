const express = require("express");
const app = express();
const port = process.env.Port || 8000;
const authRoute = require("./routes/auth");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => console.log(err));

// routes
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Backend server connected!");
});

app.listen(port, () => {
  console.log("Backend is running!");
});

// blogVerse
// 6rshq7SQHGlM5stz

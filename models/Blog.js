const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String },
    img: { type: String },
    username: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);

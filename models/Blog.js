const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

module.export = mongoose.model("Blog", BlogSchema);

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String },
    img: { type: String },
    category: { type: String, require: true },
    username: { type: String, require: true },
    comment: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);

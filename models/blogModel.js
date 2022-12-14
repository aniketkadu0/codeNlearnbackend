const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: true
    },
    paragraph : {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);

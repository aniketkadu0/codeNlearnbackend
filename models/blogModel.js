const { number } = require("joi");
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
    },
    views : Number,
    comments : [{
      name : String,
      date : Date,
      comment : String,
      reply : String }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);


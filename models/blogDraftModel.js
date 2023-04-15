const mongoose = require("mongoose");

const blogDraftSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now(),
    },
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
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
        },
        comment: {
          type: String,
          required: true,
        },
        replies: [
          {
            firstName: {
              type: String,
              required: true,
            },
            lastName: {
              type: String,
              required: true,
            },
            email: {
              type: String,
              required: true,
            },
            date: {
              type: Date,
            },
            reply: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Draft", blogDraftSchema);

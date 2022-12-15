const Blog = require("../models/blogModel");
const NodeCache = require('node-cache');

// stdTTL is the default time-to-live for each cache entry
const myCache = new NodeCache({ stdTTL: 600 });

exports.addblog = async (req, res, next) => { 
    try {
      const newBlog = await createBlogObj(req);
      const savedBlog = await Blog.create(newBlog);
      return res
        .status(200)
        .send({ message: "Blog added successfully!", blog: savedBlog });
    } catch (err) {
      return res.status(400).send({ error: "Blog not added", error: err });
    }
};

exports.updateblog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.body._id,
      { $set: req.body },
      { new: true }
  );
  
    if (!updatedBlog) {
      return res.status(400).send({ message: "Could not update blog" });
    }
    return res
      .status(200)
      .send({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    return res
      .status(400)
      .send({ error: "An error has occurred, unable to update blog" });
  }
};

exports.getData = async (req, res) => {
    const allBlogs = await Blog.find({});

    if (!allBlogs) {
      res.status(400).send({ error: "no blogs found" });
    } else {
      return res
        .status(200)
        .send({ message: "here are the found blogs:", allBlogs });
    }
};

exports.uploadImage = (req, res) => {
  res.send(req.file)
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })
}

exports.uploadBulkImage = (req, res) => {
  console.log(req)
  res.send(req.files)
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })
}

const createBlogObj = async (req) => {
    return {
        user: req.body.user,
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        tagline: req.body.tagline,
        tags: req.body.tags,
        paragraph: req.body.paragraph,
        phone: req.body.phone,
    };
};

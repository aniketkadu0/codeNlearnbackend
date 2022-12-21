const Blog = require("../models/blogModel");

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

exports.updateviews = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.query.id,
      { $set: {views : req.query.views} },
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

exports.updatelikes = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.query.id,
      { $set: {likes : req.query.likes} },
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

exports.addComment = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.query.id,
      { $push: {comments : req.body} },
      { new: true }
  );
  
    if (!updatedBlog) {
      return res.status(400).send({ message: "Could not update blog" });
    }
    else next();
    return res
      .status(200)
      .send({ message: "comment updated successfully", updatedBlog });
  } catch (error) {
    return res
      .status(400)
      .send({ error: "An error has occurred, unable to update blog" });
  }
};

exports.getData = async (req, res) => {
    const allBlogs = await Blog.find({})
    .select({ 
      "_id": 1,
      "thumbnail": 1,
      "title" : 1,
      "tagline" : 1,
      "tags" : 1,
      "views" : 1,
      "likes" : 1,
      "date" : 1,
      "comments" : 1
    });

    if (!allBlogs) {
      res.status(400).send({ error: "no blogs found" });
    } else {
      return res
        .status(200)
        .send({ message: "here are the found blogs:", allBlogs });
    }
};

exports.getBlog = async (req, res) => {
  const Blog = await Blog.findById(req.query.id);

  if (!Blog) {
    res.status(400).send({ error: "no blog found" });
  } else {
    return res
      .status(200)
      .send({ message: "here are the found blog:", Blog });
  }
};

const createBlogObj = async (req) => {
    return {
        date: req.body.date,
        user: req.body.user,
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        tagline: req.body.tagline,
        tags: req.body.tags,
        paragraph: req.body.paragraph,
        views : req.body.views,
        likes : req.body.likes,
        comments : req.body.comments
    };
};

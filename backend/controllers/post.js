let Post = require("../models/postSchema");

const post = async (req, res) => {


  const { username, projectTitle, description, link } = req.body;
  const imageUrl = req.file?.path;

  if (!imageUrl) {
    return res.status(400).json({ success: false, message: "Image upload failed" });
  }

  const newPost = new Post({
    username,
    projectTitle,
    description,
    link,
    projectImg: imageUrl,
  });

  await newPost.save();
  res.json({ success: true, post: newPost });
};

module.exports = post ;
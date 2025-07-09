
const comment = require('../models/commentSchema');
const User = require("../models/userAuthSchema")
const addComment = async (req, res) => {
  const { text, postId } = req.body;
  console.log(text,postId);
  const userId = req.userId;

 let responce = await User.findById(userId);
 console.log(responce)
  try {
    const newComment = new comment({
     postId:postId,
      text:text,
      commentedBy: responce._id
    });
console.log(newComment)
    await newComment.save();
   return res.json({ success: true, message:"comment added"})

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
module.exports = addComment
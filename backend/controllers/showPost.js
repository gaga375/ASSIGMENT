let Post = require("../models/postSchema");

const allpost = async (req, res) => {
    let data = await Post.find()
  
     return res.json({ success: true, data:data });
}
module.exports=allpost;
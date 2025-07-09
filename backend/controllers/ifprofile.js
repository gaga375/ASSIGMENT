let user = require("../models/userAuthSchema")

const isprofile = async (req, res) => {
const userId = req.userId;
 let responce = await user.findById(userId)
 if(responce.profile){
    return res.json({ success: true, username:responce.username, message:"profile ha ",})
 }
 return res.json({ success: false, message:"profile nhi ha ",})
}
module.exports = isprofile;
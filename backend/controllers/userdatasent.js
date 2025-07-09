let User = require("../models/userAuthSchema");
let UserProfile = require("../models/userProfileSchema");

let userdatasent = async (req,res)=>{

    const userId = req.userId;
 let responce = await User.findById(userId)

let profile = await UserProfile.findById(responce.profile)

   return res.json({ success: true, message:"profile ha ",data:profile})
}


module.exports=userdatasent;
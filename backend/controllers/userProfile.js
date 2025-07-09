let UserProfile = require("../models/userProfileSchema");
let User = require("../models/userAuthSchema");

let profile = async (req,res)=>{

console.log(req.body.profile)

const userId = req.userId;
let responce = await User.findById(userId);
console.log(responce)
if (responce && responce.profile) {
  return res.json({ success: false, message: "profile already exist" });
}
 let newprofile = new UserProfile({
        name:req.body.profile.name,
        bio:req.body.profile.bio,
        location:req.body.profile.location,
        skills:req.body.profile.skills,
        gitlink:req.body.profile.github,
        linkdin:req.body.profile.linkedin,
        websitelink:req.body.profile.websitelink
    })
   await newprofile.save()
      responce.profile = newprofile._id;
      responce.save()
  return res.json({ success: true, message:"profile create"})
}
module.exports =profile;
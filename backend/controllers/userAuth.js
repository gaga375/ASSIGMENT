let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let User = require('../models/userAuthSchema')

let signup = async (req,res)=> {
     let {username,email,password}= req.body;

   if( username && email && password){
       const existUser = await User.findOne({username});
       const existemail = await User.findOne({email});

if(! existUser){
if( ! existemail){

 const hashPassword = await bcrypt.hash(password,10)
let newUser = User({
    email:email,
    username:username,
    password:hashPassword
})
await newUser.save()
}
else{
    return res.json({ success: false, message:"email allredy use please try defrent email"})
}
}    
else{
     return res.json({ success: false, message:"username not available please try defrent username"})
}   
   }
   else{
     return res.json({ success: false, message:"pleese enter valed input"})
   }
   
  return res.json({ success: true, message:"register sucess fully"})
}

let login = async (req,res)=> {
    let {username,password}= req.body;

if(username && password){

    existUser = await User.findOne({username})
if(existUser){
 let isauth = await bcrypt.compare(password,existUser.password)
 if(isauth){
    let user = {id: existUser._id};
    let token = jwt.sign(user,process.env.MY_SECRET,{expiresIn: '2d'})
         return res.json({ success: true, message:`login sucessfully`,token:token})
 }
 else{
     return res.json({ success: false, message:" wrong password please enter right password"})
 }
}
else{
     return res.json({ success: false, message:"username not found"})
}

}
else{
     return res.json({ success: false, message:"please enter valed input"})
}

return res.json({ success: true, message:"login successfully"})
}

module.exports = {signup,login};
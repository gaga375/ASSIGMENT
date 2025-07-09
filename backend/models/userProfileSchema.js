let mongoos = require('mongoose');
let {Schema} = mongoos;

let UserSchema = new Schema({
   name:{
        type:String,
        required:true,
      
    },
    bio:{
   type:String,
   required:true

    },
location:{
      type:String,
      required:true
},
skills:{
      type:String,
      required:true
},
gitlink:{
      type:String
},
linkdin:{
      type:String
},
websitelink:{
      type:String
},
})

let UserProfile = mongoos.model("UserProfile",UserSchema);
module.exports =  UserProfile;
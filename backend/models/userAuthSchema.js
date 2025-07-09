let mongoos = require('mongoose');

let {Schema} = mongoos;

let UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
       default: null,
         type:Schema.Types.ObjectId,
         ref:'UserProfile' 
    }
})

let User = mongoos.model("User",UserSchema);
module.exports =  User;
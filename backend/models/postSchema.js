let mongoos = require('mongoose');

let {Schema} = mongoos;

let postSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    projectTitle:{
        type:String,
        required:true  
    },
    description:{
        type:String,
        required:true
    },
    link:{
       type:String
    },
    projectImg:{
     type:String,
     required:true
    },
     date: {
    type: Date,
    default: Date.now,
  }
})

let post = mongoos.model("Post",postSchema);
module.exports =  post;
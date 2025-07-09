const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  postId: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  commentedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
let comment = mongoose.model("comment",commentSchema);
module.exports =comment;
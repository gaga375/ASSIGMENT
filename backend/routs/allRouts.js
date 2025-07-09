
let express = require('express');
let allrouts = express.Router();
const multer = require('multer');
const { storage } = require('../utils/cloudinary');
const upload = multer({ storage });

let addComment = require('../controllers/comment');
let isprofile = require('../controllers/ifprofile');
let userAuth = require("../controllers/userAuth");
let allpost = require('../controllers/showPost')
let profile = require('../controllers/userProfile');
let authMiddleware = require("../middleware/authMiddleware")
let post = require("../controllers/post");
let userdatasent = require('../controllers/userdatasent')
let usernameSend = require('../controllers/usernamSend')

allrouts.post('/signup',userAuth.signup)
allrouts.post('/login',userAuth.login)
allrouts.get('/allpost',allpost)

allrouts.post('/ifprofile',authMiddleware,isprofile)
allrouts.post('/comments',authMiddleware,addComment)
allrouts.post('/profile',authMiddleware,profile)
allrouts.post("/post", authMiddleware, upload.single("projectImg"), post);
allrouts.post('/userdatasent',authMiddleware,userdatasent)
allrouts.post('/usernameSend',authMiddleware,usernameSend)


module.exports=allrouts;
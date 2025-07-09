let express = require('express');
const cors = require("cors");
let app = express();
let mongoose = require('mongoose');
let dotenv = require('dotenv').config();
let allrouts = require('./routs/allRouts');
let body_parser = require('body-parser');
let port = 8080;


mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));


app.use(cors());


app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));


app.use('/', allrouts);


app.get('/home', (req, res) => {
  res.send("I love you tamanna");
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

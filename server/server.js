require("dotenv").config();

const express = require("express");
const userRoutes = require("./routes/user");
const articalRoutes = require("./routes/artical");
const informationRoutes = require("./routes/information");
const navigationRoutes = require("./routes/navigation");
var cors = require('cors')

// express app
const app = express();


// middleware
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

  next();
});

// routes
app.use("/user", userRoutes);
app.use("/articals", articalRoutes);
app.use("/information", informationRoutes);
app.use("/navigation", navigationRoutes);

// start the server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

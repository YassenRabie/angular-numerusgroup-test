require("dotenv").config();

const express = require("express");
const userRoutes = require("./routes/user");
const articalRoutes = require("./routes/artical");

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/user", userRoutes);
app.use("/articals", articalRoutes);

// start the server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

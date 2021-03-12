const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const morgan = require("morgan");

//routes import
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();

//db
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

//middleware
app.use(morgan("dev"));
app.use(express.json());

//Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(6000, () => console.log("server started"));

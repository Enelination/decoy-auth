const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//routes import
const authRoute = require("./routes/auth");
const morgan = require("morgan");

dotenv.config();

//db
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

//Route Middleware
app.use("/api/user", authRoute);

app.listen(6000, () => console.log("server started"));

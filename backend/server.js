const express = require("express");
const nodemon = require("nodemon");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// db
mongoose
  .connect(process.env.DATA_BASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Data base connected");
  });

//app
const app = express();
const port = process.env.PORT || 300;

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
//cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//route
app.get("/", (req, res, next) => {
  res.json({ time: new Date().toString() });
});

app.listen(port, () => {
  console.log(`server is working at port ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let cors = require("cors");
const colorsRoutes = require("./routes/colors-routes");
require('dotenv').config();
const port = process.env.PORT || 5001;

const connectionString =  process.env.CONNECTION_STRING;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//Route initialization
app.use("/api/colors", colorsRoutes);

//Error Handling
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

  // DB Connection
  mongoose
    .connect(
      connectionString
    )
    .then(() => {
      app.listen(port);
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });

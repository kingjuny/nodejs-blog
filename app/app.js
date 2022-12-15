"use strict";
const express = require("express");
const app = express();
//라우팅
const home = require("./src/routes/home");
//앱세팅
app.set("views" , "./src/views");
app.set("view engine" , "ejs");


app.use("/",home);

module.exports = app;
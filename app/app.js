"use strict";
const express = require("express");
const app = express();
const bodyparser=require("body-parser");
//라우팅
const home = require("./src/routes/home");
//앱세팅
app.set("views" , "./src/views");
app.set("view engine" , "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true   }));
app.use("/",home);

module.exports = app;
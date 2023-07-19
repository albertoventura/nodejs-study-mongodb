var express = require('express'),
    bodyParser = require('body-parser');

var userRouter = require('../routers/user.router');
var dataRouter = require("../routers/data.router");
var app = express();

require("../database/config/db");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/data", dataRouter);

module.exports = app;
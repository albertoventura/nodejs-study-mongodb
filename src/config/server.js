var express = require('express'),
    bodyParser = require('body-parser');

var userRouter = require('../routers/user.router');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/users", userRouter);

module.exports = app;
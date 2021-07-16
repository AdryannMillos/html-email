///// Standard header for express, bodyParser, mongoose, ejs and nodemailer/////////
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
var nodemailer = require('nodemailer');
var fs = require("fs");
var ejs = require("ejs");
const Email = require('email-templates');



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


var transporter = nodemailer.createTransport({
    service: , /////// 'gmail' 'outlook'  etc////
    auth: {
        user: '////// a@gmail.com',
        pass: 'blablablabla'
    }

});



const email = new Email({
    transport: transporter,
    send: true,
    preview: false,
    views: {
      options: {
        extension: 'ejs',
      },
      root: __dirname + '/emails',
    },
  });



  email.send({
      template: 'hello',
      message: {
        from: '////// a@gmail.com',
        to: '////////@outlook.com',
      },
      locals: {
        fname: '',
        lname: '',
      },
    }).then(() => console.log('email has been send!'))
    .catch(console.error);


////////////////////////////////// Server Settings ////////////////////////////
app.listen(3000, function() {
  console.log("server running on port 3000");
});

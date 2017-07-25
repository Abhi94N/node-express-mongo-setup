require('./config/config');//environment configuration

const _ = require('lodash');
const express = require('express'); //middleware web framework for node
var {mongoose} = require('./db/mongoose');//destructuring require
var {User} = require('./models/user');
const bodyParser = require('body-parser');//be able to send jsonwebtoken

const {asyncSignUp} = require('./rest/rest');


var app = express();

const port = process.env.PORT;//set port env var later

app.use(bodyParser.json());

// //turn this into async await function and go from there
// const user = new User({
//   email: 'Abhilash@gmail.com',
//   password: 'testasdfs'
// });
// user.save();


//sign up users
app.post('/users', asyncSignUp);

app.listen(port, () => {
  console.log("Server set up");
});

module.exports  = {
  app //export primarily for testing
}

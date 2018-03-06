// list dependencies
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user.js')
const app = express();
const url = process.env.MONGOLAB_URI

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

// root directory //
app.get('/', function(req, res){
  res.json('you did it');
})

// get all users //

app.get('/api/users', function(req, res){
  User.find({}).then(eachOne => {
    res.json(eachOne);
  })
})

// Post new user //

app.post('/api/users', function(req, res){
  User.create({
    userName: req.body.NameOfUser,
    userEmail: req.body.UserEmail,
  }).then(user => {
    res.json(user)
  });
});

// Mongoose Connect // connect to mlab

mongoose.connect(url, function (err, db){
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err );
  } else {
    console.log('Connect established to', url)
  }
});

app.listen(process.env.port || 3001, () => console.log('server started 3001'))

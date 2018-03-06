const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userSchema = new Schema({
  userName : String,
  userEmail : String
})

const User = mongoose.model('User', userSchema);

module.exports = User

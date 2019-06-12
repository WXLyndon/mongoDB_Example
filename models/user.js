let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User', userSchema);
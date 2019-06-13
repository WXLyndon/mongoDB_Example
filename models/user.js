let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    id: {type: String, unique: true},
    firstName: String,
    lastName: String
});
userSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
});

userSchema.virtual('fullName').set(function (name) {
    let str = name.split(' ');
    this.firstName = str[0];
    this.lastName = str[1];
});

userSchema.methods.getInitials = function () {
  return this.firstName[0] + this.lastName[0];
};

module.exports = mongoose.model('User', userSchema);
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

userSchema.statics.getUsers = function(){
    return new Promise ((resolve, reject) =>{
        this.find((err, docs)=>{
            if (err){
                console.error(err);
                return reject(err);
            }
            resolve(docs);
        })
    })
};

module.exports = mongoose.model('User', userSchema);
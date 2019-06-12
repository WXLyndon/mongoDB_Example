let mongoose = require('mongoose');
let validator = require('validator');

let emailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: {type: String, unique: true},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value);
        }
    }
});

module.exports = mongoose.model('Email', emailSchema);
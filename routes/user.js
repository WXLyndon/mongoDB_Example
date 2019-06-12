let express = require('express');
let router = express.Router();
let UserModel = require('../models/user.js');

router.get('/', function (req, res) {
    let user = new UserModel();
    user.fullName = 'Lyndon Wang';
    console.log(user.toJSON());
    console.log();
    console.log(user.fullName);
    res.json(user.toJSON());
});

module.exports = router;
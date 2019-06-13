let express = require('express');
let router = express.Router();
let UserModel = require('../models/user.js');
let shortId = require('shortid');
let mongoose = require('mongoose');

/* Post user record to the db */
router.post('/', function (req, res) {
    let user = new UserModel({
        _id: new mongoose.Types.ObjectId,
        id: shortId.generate(),
        lastName: req.body.lastName,
        firstName: req.body.firstName
    });
    user.save()
        .then(result => {
            console.log(result);
            res.status(201).json({result: 'success'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.get('/', function (req, res) {
    // let user = new UserModel({
    // });
    // user.fullName = 'Lyndon Wang';
    // console.log(user.toJSON());
    // console.log();
    // console.log(user.getInitials());
    // res.json(user.getInitials());
    UserModel.getUsers().then(docs=>{
        console.log(docs);
        res.json(docs);
    })
        .catch(err=>{
            console.error(err);
        })
});

module.exports = router;
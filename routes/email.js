let express = require('express');
let router = express.Router();
let EmailModel = require('../models/email');
let mongoose = require('mongoose');
let shortId = require('shortid');

/* Post email record to the db */
router.post('/', function (req, res) {
    let msg = new EmailModel({
        _id: new mongoose.Types.ObjectId,
        id: shortId.generate(),
        email: req.body.email
    });
    msg.save()
        .then(result => {
            console.log(result);
            res.status(201).json({result: 'success'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

/* Query the email code */
router.get('/', function (req, res) {
    EmailModel
        .find({
            email: req.body.email
        })
        .then(doc => {
            console.log(doc);
            res.status(201).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

/*  Update the email record */
router.post('/update', function (req, res) {
    EmailModel
        .findOneAndUpdate(
            {
                email: req.body.queryEmail
            },
            {
                email: req.body.newEmail
            },
            {
                new: true,
                runValidate: true
            })
        .then(doc => {
            console.log(doc);
            res.status(201).json(doc)
        })
        .catch(err => {
            console.error(err)
        })

});

/* Delete the email record */
router.post('/delete', function (req, res) {
    EmailModel
        .findOneAndRemove(
            {email: req.body.email}
        )
        .then(response => {
            console.log(response);
            res.status(201).json({response});
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;

let express = require('express');
let router = express.Router();
let EmailModel = require('../models/email');
let mongoose = require('mongoose');
let shortId = require('shortid');

/* GET users listing. */
router.post('/', function(req, res) {
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

router.get('/', function (req, res) {
    EmailModel
        .find({
            email: req.body.email
        })
        .then( doc => {
            console.log(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;
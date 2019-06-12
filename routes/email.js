let express = require('express');
let router = express.Router();
let EmailModel = require('../models/email');
let mongoose = require('mongoose');
let shortid = require('shortid');

/* GET users listing. */
router.post('/post', function(req, res, next) {
  let msg = new EmailModel({
    _id: new mongoose.Types.ObjectId,
    id: shortid.generate(),
    email: req.body.email,
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

module.exports = router;

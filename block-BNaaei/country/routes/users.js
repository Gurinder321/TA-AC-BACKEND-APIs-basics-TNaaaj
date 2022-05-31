var express = require('express');
var router = express.Router();
var State = require('../models/state');

/* GET users listing. */
router.post('/', (req, res, next) => {
  State.create(req.body, (err, createdState) => {
    if (err) return next(err);
    console.log(createdState);
    res.send('State details are added to the database');
  });
});

router.get('/', (req, res, next) => {
  State.find({}, (err, states) => {
    if (err) return next(err);
    res.json(states);
  });
});

module.exports = router;

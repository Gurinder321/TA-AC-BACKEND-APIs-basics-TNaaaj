var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({ msg: 'Welcome' });
});

router.get('/api/books', function (req, res, next) {
  res.status(200).json({ msg: 'Welcome' });
});

router.get('/api/books/:id', function (req, res, next) {
  res.status(200).json({ msg: 'Welcome' });
});

router.post('/api/books', function (req, res, next) {
  res.status(200).json({ msg: 'Welcome' });
});

router.get('/api/books/:id', function (req, res, next) {
  res.status(200).json({ msg: 'Welcome' });
});

router.get('/api/books', function (req, res, next) {
  res.status(200).json({ msg: 'Welcome' });
});

module.exports = router;

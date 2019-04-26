var express = require('express');
var router = express.Router();

router.use('/api', require('./api.v0.js'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 2' });
});

module.exports = router;

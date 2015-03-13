var express = require('express');
var router = express.Router();
var path = require("path");
var media = path.join(__dirname,"../public/media");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

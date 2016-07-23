/**
 * Created by admin on 2016/7/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/v1/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

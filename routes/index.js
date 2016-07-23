var express = require('express');
var router = express.Router();

/* 主页 */
router.get('/', function (req, res, next) {
    res.render('home', {title: 'Express'});
});

/* 育儿知识 */
router.get('/yuer', function (req, res, next) {
    res.render('menu-yuer', {title: 'Express'});
});

/* 母婴用品 */
router.get('/muying', function (req, res, next) {
    res.render('menu-muying', {title: 'Express'});
});

/* 亲子活动 */
router.get('/qinzi', function (req, res, next) {
    res.render('menu-qinzi', {title: 'Express'});
});

/* 个人中心 */
router.get('/geren', function (req, res, next) {
    res.render('menu-geren', {title: 'Express'});
});

/* 常见问题 */
router.get('/wenti', function (req, res, next) {
    res.render('menu-wenti', {title: 'Express'});
});
/* 登录 */
router.get('/denglu', function (req, res, next) {
    res.render('menu-denglu', {title: 'Express'});
});
/* 注册 */
router.get('/zhuce', function (req, res, next) {
    res.render('menu-zhuce', {title: 'Express'});
});
/* 联系我们 */
router.get('/lianxi', function (req, res, next) {
    res.render('menu-lianxi', {title: 'Express'});
});


module.exports = router;

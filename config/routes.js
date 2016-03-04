var express = require('express');
var router = express.Router();
//copied from users index, in the modeling app
// any resource page you require the controller
var usersController = require("../controllers/users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// copied
/* GET users listing. */
router.get('/users', usersController.index);

module.exports = router;

var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');


// ------------------------------ HOMEPAGE ------------------------------ //
router.get('/', function(req, res, next) {
  res.render('welcome');
});

// ------------------------------ REGISTER ------------------------------ //
router.get('/register', authController.register_get);
router.post('/register', authController.register_post)

// ------------------------------ LOGIN/LOGOUT ------------------------------ //
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);

// ------------------------------ CREATE MESSAGE ------------------------------ //
router.get('/dashboard', authController.dashboard_get);

module.exports = router;
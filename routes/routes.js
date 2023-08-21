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


// router.get('/register', function(req, res, next) {
//   res.render('register');
// });
// router.post('/register', function(req, res, next) {
//   res.render('login');
// })

// ------------------------------ LOGIN/LOGOUT ------------------------------ //
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get ('/logout', authController.logout_get);
// router.get('/login', function(req, res, next) {
//   res.render('login');
// });

// // Login Request
// router.post('/login', function(req, res, next) {
//   const name = req.body.name;
//   const password = req.body.password;
//   console.log(req.body);
// })

// ------------------------------ CREATE MESSAGE ------------------------------ //


module.exports = router;
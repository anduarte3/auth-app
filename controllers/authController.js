const User = require('../models/user')
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// ------------------------------ REGISTER ------------------------------ //
exports.register_get = asyncHandler(async (req, res, next) => {
    res.render('register')
});
exports.register_post = [
    // Validate and sanitize fields
    body('name')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Username must be specified.'),
    
    body('email')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Email must be specified.'),
    
    body('password').isLength({ min: 6 }),
    body('passwordConfirm').custom((value, { req }) => {
        return value === req.body.password;
    }).withMessage('Passwords do not match.'),

    // Process request after validation and sanitization
    asyncHandler(async (req, res, next) => {
        // Find if Username and Email are taken in database
        const takenUsername = await User.find({ name: req.body.name });
        const takenEmail = await User.find({ email: req.body.email });
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('register', {
                errors: errors.array()
            });
        } else if (takenUsername.length > 0 || takenEmail.length > 0) {
            res.render('register', {errors: [{ msg: 'Username or Email already taken.'}]});
        } else {
            bcrypt.hash('req.body.password', 10, async (err, hashedPassword) => {
                if (err) return next(err)
                else {
                    // Create new user with escaped and trimmed data
                    const addUser = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: hashedPassword,
                    });
                    // Save to database
                    await addUser.save();
                    // Redirect to login
                    res.redirect('/login')
                }                
            });
        }
    })
]

// ------------------------------ LOGIN/LOGOUT ------------------------------ //
exports.login_get = asyncHandler(async (req, res, next) => {
    res.render('login')
});
exports.login_post = passport.authenticate('local', {
    sucessRedirect: "/dashboard",
    failureRedirect: "/login"
});
exports.logout_get = asyncHandler(async (req, res, next) => {
    // Logout
    res.render('welcome')
});

// Ok things todo tomorrow and next days:
// - compare on login post request if username and password match on database
// - if login is failed just re render login.ejs again (could also make generic error)
// - remember to check passportjs docs to learn how to use it
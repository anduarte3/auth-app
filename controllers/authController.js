const User = require('../models/user')
const { check, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const passport = require("passport");


// ------------------------------ REGISTER ------------------------------ //
exports.register_get = asyncHandler(async (req, res, next) => {
    res.render('register')
});
exports.register_post = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body
    console.log({ username, email, password });

    const newUser = new User({
        username,
        email,
        password
    })
    // Save new user to the database
    const savedUser = await newUser.save();

    res.redirect('/login')
});


// ------------------------------ LOGIN/LOGOUT ------------------------------ //
exports.login_get = asyncHandler(async (req, res, next) => {
    res.render('login')
});

exports.login_post = asyncHandler(async (req, res, next) => {
    // Compare data with MongoDB
    // Doing post: use passport to authenticate
});

exports.logout_get = asyncHandler(async (req, res, next) => {
    //Logout
    res.render('welcome')
});
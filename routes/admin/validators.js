// require other files from this project
const usersRepo = require('../../repositories/users');

// require statement for outside libraries
const { check } = require('express-validator');

module.exports = {
    requireEmail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom(async (email) => {
            const existingUser = await usersRepo.getOneBy({ email });
            if (existingUser) {
                throw new Error('Email in use');
            } else {
                return true;
            }
        }),
    requirePassword: check('password')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
    confirmPassword: check('passwordConfirmation')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Passwords must match')
        .custom((passwordConfirmation, { req }) => {
            if (passwordConfirmation !== req.body.password) {
                throw new Error('Passwords must match');
            } else {
                return true;
            }
        }),
    validateEmail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Please provide a valid email')
        .custom(async (email) => {
            const user = await usersRepo.getOneBy({ email });
            if (!user) {
                throw new Error('Email not found');
            } else {
                return true;
            }
        }),
    validatePassword: check('password')
        .trim()
        .custom(async (password, { req }) => {
            const user = await usersRepo.getOneBy({
                email: req.body.email,
            });
            const validPassword = await usersRepo.comparePasswords(
                user.password,
                password
            );
            if (!validPassword) {
                throw new Error('Invalid password');
            } else {
                return true;
            }
        }),
    requireTitle: check('title')
        .trim()
        .isLength({ min: 5, max: 40 })
        .withMessage('Title must be between 5 and 40 characters'),
    requirePrice: check('price')
        .trim()
        .toFloat()
        .isFloat({ min: 1 })
        .withMessage(
            'Price must contain a number greater than 1 with no letters or special characters'
        ),
};

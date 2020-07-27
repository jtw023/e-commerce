// require other files from this project
const usersRepo = require('../../repositories/users');
const {
    requireEmail,
    requirePassword,
    confirmPassword,
    validateEmail,
    validatePassword,
} = require('./validators');

// require statement for outside libraries
const express = require('express');
const { validationResult } = require('express-validator');

const router = express.Router();

// what to show for the signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// sign up a new user
router.post(
    '/signup',
    [requireEmail, requirePassword, confirmPassword],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            if (errors.errors[0].param === 'email') {
                if (errors.errors[2]) {
                    res.render('signup', {
                        errorsEmail: errors.errors[0].msg,
                        errorsPassword: errors.errors[1].msg,
                        errorsConfirmation: errors.errors[2].msg,
                    });
                } else if (errors.errors[1]) {
                    if (errors.errors[1].param === 'passwordConfirmation') {
                        res.render('signup', {
                            errorsEmail: errors.errors[0].msg,
                            errorsConfirmation: errors.errors[1].msg,
                        });
                    } else {
                        res.render('signup', {
                            errorsEmail: errors.errors[0].msg,
                            errorsPassword: errors.errors[1].msg,
                        });
                    }
                } else {
                    res.render('signup', {
                        errorsEmail: errors.errors[0].msg,
                    });
                }
            } else if (errors.errors[0].param === 'password') {
                if (errors.errors[1]) {
                    res.render('signup', {
                        errorsPassword: errors.errors[0].msg,
                        errorsConfirmation: errors.errors[1].msg,
                    });
                } else {
                    res.render('signup', {
                        errorsPassword: errors.errors[0].msg,
                    });
                }
            } else if (errors.errors[0].param === 'passwordConfirmation') {
                res.render('signup', {
                    errorsConfirmation: errors.errors[0].msg,
                });
            }
        } else {
            const { email, password } = req.body;

            const user = await usersRepo.create({ email, password });

            req.session.userId = user.id;

            res.redirect('/admin/products');
        }
    }
);

router.get('/signout', (req, res) => {
    res.render('signout');

    req.session = null;
});

router.get('/signin', (req, res) => {
    res.render('signin');
});

router.post('/signin', [validateEmail, validatePassword], async (req, res) => {
    const errors = validationResult(req);

    const { email } = req.body;

    const user = await usersRepo.getOneBy({ email });

    if (!errors.isEmpty()) {
        if (errors.errors[0].param === 'email') {
            if (errors.errors[1]) {
                res.render('signin', {
                    errorsEmail: errors.errors[0].msg,
                    errorsPassword: errors.errors[1].msg,
                });
            } else {
                res.render('signin', {
                    errorsEmail: errors.errors[0].msg,
                });
            }
        } else if (errors.errors[0].param === 'password') {
            res.render('signin', {
                errorsPassword: errors.errors[0].msg,
            });
        }
    } else {
        req.session.userId = user.id;

        res.redirect('/admin/products');
    }
});

module.exports = router;

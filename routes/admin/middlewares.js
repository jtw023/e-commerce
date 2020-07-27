// require statement for outside libraries
const { validationResult } = require('express-validator');

module.exports = {
    requireAuth(req, res, next) {
        if (!req.session.userId) {
            return res.redirect('/signin');
        }

        next();
    },
};

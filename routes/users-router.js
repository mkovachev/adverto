const express = require('express');
const router = express.Router();

// home
router.get('/api/users', function (req, res) {
    res.render('users');
});

// auth
router.get('/api/users/auth', function (req, res) {
    res.render('users');
});


module.exports = router;
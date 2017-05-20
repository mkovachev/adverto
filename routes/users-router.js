const express = require('express');
const router = express.Router();

// home
router.get('/api/users', function (req, res) {
    res.render('users');
});


module.exports = router;
const express = require('express');
const router = express.Router();

// home
router.get('/main', function (req, res) {
    res.render('main');
});


module.exports = router;
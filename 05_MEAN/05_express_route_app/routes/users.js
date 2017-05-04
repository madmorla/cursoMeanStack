var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/ids', function(req, res, next) {
    res.send('[1,2,3,4]');
});

module.exports = router;
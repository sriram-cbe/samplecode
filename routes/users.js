var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/post', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
});

module.exports = router;
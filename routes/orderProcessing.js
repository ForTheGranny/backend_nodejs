/**
 * Created by roman on 09.03.15.
 */
var express = require('express');
var router = express.Router();

/* POST order processing. */
router.post('/', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:63342");
    res.render('order', req.body);
    console.log(req.body);
});

router.options('/', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:63342");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods","POST");
    res.sendStatus(200);
});



module.exports = router;

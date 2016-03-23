var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var proposals = [
        {
            'id': 1,
            'name': 'thj',
            'price': 200,
            'costing': 50,
            'ic': 8,
            'oc': 10
        },
        {
            'id': 2,
            'name': 'abc',
            'price': 200,
            'costing': 60,
            'ic': 8,
            'oc': 10
        }
    ];
    res.send(proposals);
});

module.exports = router;
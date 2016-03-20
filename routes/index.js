var express = require('express');
var router = express.Router();

router.get('/images', function(req, res, next) {
	res.status(200).send({});
});


module.exports = router;

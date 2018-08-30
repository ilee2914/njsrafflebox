var express = require('express');
var db = require('../dbconnect');
var util = require('util');

var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
	//res.send('respond with a resource');
	try {
		let result = await getEmail();
		res.json([{
			id: 1,
			email: result[0].email
		}]);
	} catch (err) {
		console.log(err.stack);
	}
});

async function getEmail() {
	try {
		var result = await db.con.query('SELECT email FROM users');
		return result;
	} catch(err) {
		console.log(err.stack);
	}
}

module.exports = router;

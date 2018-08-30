var mysql = require('mysql');
var util = require('util');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qweasd",
	database: "rafflebox"
});

con.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log("Connected!");
});

con.query = util.promisify(con.query);

exports.con = con;

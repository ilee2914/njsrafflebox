var express = require('express');
var db = require('../dbconnect');

var router = express.Router();

/* GET users listing. */
router.post('/', async function(req, res, next) {
	//res.send('respond with a resource');
  try {
   if (req.body.password && req.body.username) {
  		let result = await updateUser(req.body.username, req.body.password);
      res.sendStatus(200);
  	} else if (req.body.username) {
  		let result = await insertUser(req.body.username);
      console.log(result);
      if (result === 'ER_DUP_ENTRY') {
        res.sendStatus(600);
      } else {
        res.sendStatus(200);
      }
      res.sendStatus(200);
  	}
  } catch (err) {
    console.log(err.stack);
  }
	res.end();
});

async function insertUser(username) {
  try {
    let result = await db.con.query("INSERT INTO users(email) VALUES (?)", [username]);
    return result;
  } catch (err) {
    return err.code;
  }
}

async function updateUser(email, password) {
	try {
    let result = await db.con.query("UPDATE users SET password = ? WHERE email = ?", [password, email]);
    return result;
	} catch (err) {
    return err.code;
  }
}

module.exports = router;

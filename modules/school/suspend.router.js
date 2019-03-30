const suspend = require('express').Router();
var db = require('../../db/connect');

/**
* Method to suspend a student
*/

suspend.post('/api/suspend', (req, res) => {
	var body = req.body;
	var query = `UPDATE class set status = 'S' WHERE  student = '${body.student}'`;
	db.query(query, function (error, results, fields) {
		if(error){
			res.send(error);
		}
		res.status(204).end();
	});
});

module.exports = suspend;
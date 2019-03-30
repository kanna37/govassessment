const register = require('express').Router();
var db = require('../../db/connect');

/**
* Method to register the students for the given teacher ID
*/

register.post('/', (req, res) => {
	var query = `INSERT INTO class (teacher, student, notification) VALUES `
	var body = req.body, values = [];
	body.students.forEach((item) => {
		values.push(`('${body.teacher}','${item}','')`);
	});
	query += values.join(",");
	db.query(query, function (error, results, fields) {
		if(error){
			res.send(error);
		}
		res.status(204).end();
	});
});

module.exports = register;
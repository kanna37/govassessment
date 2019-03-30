const classrouter = require('express').Router();
var db = require('../../db/connect');

/**
	Method to retreive the studends for the given teacher ID
	Status A is checked
**/
classrouter.get('/', (req, res) => {
	var teacherID = req.query.teacher;
	var query = `SELECT student from class where teacher = '${teacherID}' AND status = 'A'`;
	if(!teacherID){
		res.status(200).json({message : "Teacher email is missing in the query"});
	}
	db.query(query, function (error, results, fields) {
	  	if (error){
	  		throw error;	
	  	}
	  	var finalResult = {
	  		"students" : []
	  	} 
	  	results.forEach((item)=> {
	  		finalResult.students.push(item.student);
	  	});
	  	res.status(200).json(finalResult);
	});
});
module.exports = classrouter;
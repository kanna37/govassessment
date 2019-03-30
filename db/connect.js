var mysql = require('mysql');
var dbConnect =  mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database : 'school'
});
dbConnect.connect((err)=> {
	if (err){
		console.log("Error in connecting DB");
	}else{
		console.log("DB connection established successfully !!");	
	}
	
});
module.exports = dbConnect;
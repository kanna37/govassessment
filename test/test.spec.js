var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
const server = require('../index');
chai.use(chaiHttp);

describe('GOV API Testing', function(){
	it("Test suite for register student ", (done)=> {
		var postBody = {
			"teacher": "teachernew@gmail.com",
			"students":[
				"studentAAA@example.com",
				"studentBBB@example.com"
			]
		}
		chai.request(server)
		.post('/api/register')
		.send(postBody)
		.end((err, res) => {
			if(err){
				return done(err);
			}
			res.should.have.status(204);
			done();
		});
	});

	it("Should get all common students for the given teacher - teacher10@gmail.com", (done)=> {
		chai.request(server)
		.get('/api/commonstudents?teacher=teacher10@gmail.com')
		.end((err, res) => {
			if(err){
				return done(err);
			}
			res.should.have.status(200);
			res.body.should.be.a('object');
			res.body.should.have.property('students');
            res.body.students.should.be.a('array');
            res.body.students.length.should.be.eql(2);
			done();
		});
	});

	it("Test suite for suspend a student ", (done)=> {
		var suspend = {
			"student" : "studentBBB@example.com"
		}
		chai.request(server)
		.post('/api/suspend')
		.send(suspend)
		.end((err, res) => {
			if(err){
				return done(err);
			}
			res.should.have.status(204);
			done();
		});
	});
});
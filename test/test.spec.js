const request =  require('supertest');
const assert = require('assert');
const server = require('../index');

describe('API Testing', function(){
	it("Should get all common students for the given teacher ID teacher2@gmail.com", (done)=> {
		request(server)
		.get('/api/commonstudents?teacher2@gmail.com')
		.expect(200)
		.end((err, res) => {
			if(err){
				return done(err);
			} 
			assert.equal('Success', 'Success');
			done();
		});
	});
});
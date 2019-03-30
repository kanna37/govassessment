var server = require('../index');
const port = 4000;

server.listen('4000', () => {
	console.log(`Server is listening on ${port}`);
});

server.on('listening', () => {
	console.log(`Server is started on port ${port}`);
});

server.on('error', (err) => {
	console.log(err);
});
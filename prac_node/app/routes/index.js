const firstRoute = require('./firstRoute');
const secondRoute = require('./secondRoute');

module.exports = function(app, db){
	firstRoute(app, db);
	secondRoute(app, db);
};

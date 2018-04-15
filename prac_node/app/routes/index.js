const firstRoute = require('./firstRoute');

module.exports = function(app, db){
	firstRoute(app, db);
};

const indexRoute = require('./indexRoute.js');
const searchRoute = require('./searchRoute.js');
const moviesRoute = require('./moviesRoute.js');
const mdRoute = require('./mdRoute.js');
const umdRoute = require('./umdRoute.js');

module.exports = function(app, db){
	indexRoute(app, db);
	// searchRoute(app, db);
	moviesRoute(app, db);
	mdRoute(app, db);
	umdRoute(app, db);
};

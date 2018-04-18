const indexRoute = require('./indexRoute.js');

module.exports = function(app, db){
	indexRoute(app, db);
};
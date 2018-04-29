const put = require('./routes.js');

module.exports = function(app, db){
	put(app, db);
};
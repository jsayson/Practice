const view = require('./view.js');
const upload = require('./upload.js');
module.exports = function(app, db){
	view(app, db);
	upload(app, db);
};
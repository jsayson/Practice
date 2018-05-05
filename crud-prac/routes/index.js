const viewPost = require('./viewPost.js');
const postId = require('./postId.js');
const submitPost = require('./submitPost.js');
const editPost = require('./editPost.js');

module.exports = function(app, db){
	viewPost(app, db);
	postId(app, db);
	submitPost(app, db);
	editPost(app, db);
};

export const selectUser = (user) =>{
	console.log('You clicked on user: ', user.username);
	return ({
		type: 'CLICKED_USER',
		payload: user
	});
};
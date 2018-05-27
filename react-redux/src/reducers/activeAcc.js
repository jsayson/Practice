export default function(state = null, action){
	switch(action.type){
		case 'CLICKED_USER': 
			return action.payload;
			break;
	}
	return state;
}
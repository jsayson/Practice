import { combineReducers } from 'redux';
import Users from './users';
import activeUsers from './activeAcc';

const allReducers = combineReducers({
	users: Users,
	active: activeUsers
});

export default allReducers;
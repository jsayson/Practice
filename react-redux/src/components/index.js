import React from 'react';
import UsersList from '../container/usersList';
import ActiveUser from '../container/activeUser';

class App extends React.Component{
	render(){
		return (<div><UsersList/><hr/><ActiveUser /></div>);
	}
}

export default App;
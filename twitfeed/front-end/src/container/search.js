import React from 'react';


class Search extends React.Component{
	render(){
		return (
			<form>
			<input type='search' placeholder='Search' name='search' />
			<input type='submit' value='search' /><br/>
			</form>
			);
	}
}

export default Search;

// handleSort(e){
// 		// const data = new FormData(e.target);
// 		let d = new Date();
// 		var myDate;
// 		const sort = e.target.value;
// 		if(sort==='latest'){
// 			let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
// 			// (sortedLwDate.getMonth()+1).toString()).length)
// 			let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
// 			let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
// 			myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker+'0000';
// 			// console.log(sortedLwDate.getDate())
// 			console.log(myDate);
// 		}
// 		if(sort==='lWeek'){
// 			let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()-7);
// 			// (sortedLwDate.getMonth()+1).toString()).length)
// 			let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
// 			let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
// 			myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker+'0000';
// 			// console.log(sortedLwDate.getDate())
// 			console.log(myDate);
// 		}
// 		if(sort==='lMonth'){
// 			let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()-30);
// 			// (sortedLwDate.getMonth()+1).toString()).length)
// 			let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
// 			let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
// 			myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker+'0000';
// 			// console.log(sortedLwDate.getDate())
// 			console.log(myDate);
// 		}
// 		if(sort==='lYear'){
// 			let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()-365);
// 			// (sortedLwDate.getMonth()+1).toString()).length)
// 			let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
// 			let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
// 			myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker+'0000';
// 			// console.log(sortedLwDate.getDate())
// 			console.log(myDate);
// 		}
// 		const url = '/api/trends/';
// 		const param = this.props.match.params.tweet_name;
// 		const apiUrl = url+param+'/'+myDate;
// 		this.props.dispatch(fetchTweets(apiUrl));
// 	}
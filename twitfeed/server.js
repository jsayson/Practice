const app = require('express')();
const bodyParser = require('body-parser');
const Twitter = require('twitter');

const PouchDB = require('pouchdb');

const session = require('express-session');

const getBearerToken = require('get-twitter-bearer-token');

app.use(session({secret: 'ssshhhhh', resave: false, saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json())


let port = process.env.PORT || 8003;

const accounts = new PouchDB('accounts');


const client = new Twitter({
	consumer_key : 'consumer_key',
	consumer_secret : 'consumer_secret',
	bearer_token : 'your_bearer_token'

});

// console.log(session);

// accounts.destroy(); 
app.post('/api/registerAcc', (req, res)=>{
	accounts.put({
		_id: req.body.regEmail,
		myemail: req.body.regEmail,
		mypassword: req.body.regPassword
	}).then(res=>{
		console.log(res);
		// res.send(res);
		// res.send({user})
	}).catch(error=>{
		res.send({error : error});
	})
	res.send({greeting: 'Created Account'});
});

// accounts.destroy();

accounts.allDocs({
	include_docs: true,
	attachments: true
}).then(items=>{
	// console.log(items);
	items.rows.map(item=>{
		console.log(item);
	})
})

app.post('/api/loginAcc', (req, res)=>{
	console.log(req.body)
	accounts.allDocs({include_docs: true,
	  attachments: true}
		).then(info=>{
		// console.log(info);
		info.rows.map(item=>{
			if(item.doc.myemail===req.body.email && item.doc.mypassword === req.body.password){
			console.log(item.doc);
			res.send({user: req.body.email})
			// return true;
			}
			// return false;
		})
	})
	// res.send({greeting: 'nice'})
})
	// accounts.info().then((info)=>{
	// 	console.log(info);
	// })
	// accounts.put({
	// 	_id: 'magic2',
	// 	name: 'magic',
	// }).then(res=>console.log(res)).then((error)=>console.log(error));
	// 	res.send('success');

	// twitter_consumer_key = 'UqSvoQfXveHkMGiXMMsY6m6z7',
	// twitter_consumer_secret = 'c7UYLhw1Rx8m97XB3b9pCUjdrDfKKqevPurW6AwrwT4toVmZ2O',
	// const_bearer_token = 'AAAAAAAAAAAAAAAAAAAAALW66QAAAAAAqr15ddgxkvv9hCzac5Jaje5k4Lg%3DPuGf0jFz0XzlQoDJZZ6ihsoP71MDaoC0RTYrjotlRTKunqm95f'


// getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
//   if (err) {
//     // handle error
//     console.log(error);
//   } else {
  
//     // bearer token
//     console.log(res.body.access_token)
//   }
// })


app.get('/api/trends', (req, res)=>{
	// 23424934
	var tweetCon = [];
	client.get('https://api.twitter.com/1.1/trends/place.json?id=23424934', function(error, tweets, response){
		if(error){
			return console.log(error)
		};
		// console.log(response.body);
		// console.log(tweets[0].trends);
		tweets[0].trends.filter((item)=>{
			if(item.tweet_volume!=null){
				tweetCon.push(item)
			}
		})
		// console.log(tweetCon);
		// res.send(tweets[0].trends);
		res.send(tweetCon);
	})
})

app.get('/api/trends/:tweet_name', (req, res)=>{
	const tName = req.params.tweet_name;
	const hashChecker = tName.charAt(0) === '#' ? tName.slice(1) : tName;
	client.get("https://api.twitter.com/1.1/tweets/search/30day/twitfeed.json?query="+hashChecker+"&maxResults=30", function(error, tweets, response){
		if(error){
			return console.log(error);
		}
		// console.log(tweets)
		res.send(tweets);
	})
});

app.get('/api/trends/:tweet_name/:next', (req, res)=>{
	const tName = req.params.tweet_name;
	const next = req.params.next;
	console.log(tName);
	console.log(next);
	const hashChecker = tName.charAt(0) === '#' ? tName.slice(1) : tName;
	client.get("https://api.twitter.com/1.1/tweets/search/30day/twitfeed.json?query="+hashChecker+"&maxResults=30&next="+next+"", function(error, tweets, response){
		if(error){
			return console.log(error);
		}
		// console.log(tweets)
		res.send(tweets);
	})
});

app.get('/api/user/:name', (req, res)=>{
	const name = req.params.name;
	// console.log(name);
	var collectTweets = [];
	client.get("https://api.twitter.com/1.1/users/show.json?screen_name="+name+"&include_entities=true&tweet_mode=extended", function(error, tweets, response){
		if(error){
			return console.log(error);
		}
		// "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="+name+"&count=20"
		// "https://api.twitter.com/1.1/tweets/search/"
		client.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="+name+"&count=20&include_entities=true&tweet_mode=extended&exclude_replies=true", function(error1, tweets1, response1){
			if(error1){
				return console.log(error1);
			}
		for(let i = 1; i < tweets1.length+1; i++){
			collectTweets.push(tweets1[i])
		}
		// console.log(collectTweets.length);
		res.send({user: tweets, tweets: collectTweets});
		});
	});
});


app.get('/api/user/:name/tweets', (req, res)=>{
	const name = req.params.name;
	console.log(name);
	client.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="+name+"&count=20", function(error, tweets, response){
		if(error){
			return console.log(error);
		}
		console.log(tweets);
		res.send(tweets);
	});
})

app.get('/api/top_users/:page', (req, res)=>{
	// const users = [21447363, 27260086, 813286, 79293791, 17919972, 783214, 25365536, 16409683, 792867935727616000, 21111883, 23375688, 428333, 25073877, 44409004, 15485441];
	var arr1 = [];
	const page = parseInt(req.params.page);
	console.log(req.params);
	if(page===1){
		client.get("https://api.twitter.com/1.1/users/lookup.json?user_id=21447363, 27260086, 813286, 79293791, 17919972", (error, tweets, response)=>{
			if(error){
				return console.log(error);
			}
			res.send(tweets);
		});
	}
	if(page===2){
		client.get("https://api.twitter.com/1.1/users/lookup.json?user_id=14230524, 15846407, 155659213, 10228272, 26565946", (error, tweets, response)=>{
			if(error){
				return console.log(error);
			}
			res.send(tweets);
		});
	}
	if(page===3){
		client.get("https://api.twitter.com/1.1/users/lookup.json?user_id=783214, 25365536, 16409683, 792867935727616000, 21111883", (error, tweets, response)=>{
			if(error){
				return console.log(error);
			}
			res.send(tweets);
		});
	}
	if(page===4){
		client.get("https://api.twitter.com/1.1/users/lookup.json?user_id=23375688, 428333, 25073877, 44409004, 15485441", (error, tweets, response)=>{
			if(error){
				return console.log(error);
			}
			res.send(tweets);
		});
	}
});

app.post('/api/popular', (req, res)=>{
	console.log(req.body);
	const search = req.body.search;
	const date = req.body.sort;
	const d = new Date();
	var myDate;
	const hashChecker = search.charAt(0) === '#' ? search.slice(1) : search;
	// "&fromDate="+sort+"&toDate="+sort+10000+
	if(date==='latest'){
			let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
			let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
			let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
			myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker;
			const fromDate = myDate+'0000';
			client.get("https://api.twitter.com/1.1/tweets/search/30day/twitfeed.json?query="+hashChecker+"&maxResults=30&fromDate="+fromDate, function(error, tweets, response){
				if(error){
					return console.log(error);
				}
				res.send(tweets);
			});
	}
	if(date==='lweek'){
			let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()-7);
			let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
			let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
			myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker;
			const fromDate = myDate+'0000';
			const toDate = myDate+'2359';
			client.get("https://api.twitter.com/1.1/tweets/search/30day/twitfeed.json?query="+hashChecker+"&maxResults=30&fromDate="+fromDate+"&toDate="+toDate, function(error, tweets, response){
				if(error){
					return console.log(error);
				}
				res.send(tweets);
			});
	}
	if(date==='lmonth'){
			let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()-30);
			let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
			let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
			myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker;
			const fromDate = myDate+'0000';
			const toDate = myDate+'2359';
			client.get("https://api.twitter.com/1.1/tweets/search/30day/twitfeed.json?query="+hashChecker+"&maxResults=30&fromDate="+fromDate+"&toDate="+toDate, function(error, tweets, response){
				if(error){
					return console.log(error);
				}
				res.send(tweets);
			});
	}
	if(date==='lyear'){
			let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()-365);
			let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
			let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
			myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker;
			const fromDate = myDate+'0000';
			const toDate = myDate+'2359';
			client.get("https://api.twitter.com/1.1/tweets/search/30day/twitfeed.json?query="+hashChecker+"&maxResults=30&fromDate="+fromDate+"&toDate="+toDate, function(error, tweets, response){
				if(error){
					return console.log(error);
				}
				res.send(tweets);
			});
	}
});

const server = app.listen(port, ()=>{
	let port = server.address().port;
	console.log('We are live on port: ', port);
})

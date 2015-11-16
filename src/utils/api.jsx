var Fetch = require ('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey =  '48337353face9df';


module.exports = window.api = {
	get: function(url){
		return fetch(rootUrl + url,{
			headers: {
				'Authorization': 'Client-ID ' + apiKey //providing correct authoirzation
			}
		})
		.then(function(response){ //called after data returned from server
			// console.log(response);
			return response.json()
		})
	}
}


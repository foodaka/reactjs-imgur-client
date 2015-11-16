var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: [Actions], // any actions within actions get called, call that method
	getTopics: function() {
		return Api.get('topics/defaults')
			.then(function(json){
				this.topics = json.data;
				this.triggerChange();
			}.bind(this)); //making reference to this, need to bind
	},

	triggerChange: function(){
		this.trigger('change',this.topics); // this.trigger is a method provided by reflux. first argument is name of event we want to trigger. second argument is information we want to share.
	}
})
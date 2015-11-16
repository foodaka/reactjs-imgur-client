var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');
// var TopicStore = require('../stores/topic-store') //two dots to go up


module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange') // this component needs to listen to any event triggered by topicstore, when topic store triggers an event run function onchange
  ],
  
  getInitialState: function(){
    return {
      topics: []
    }
  },
  componentWillMount: function(){
    Actions.getTopics();
  },


  render: function(){
    return <div className="list-group">
      Topic List
      {this.renderTopics()}
    </div>
  },

  renderTopics: function(){
    return this.state.topics.map(function(topic){
      return <li>
        {topic}
      </li>
    })
  },

  onChange: function(event, topics){
    this.setState({topics: topics});
  }
})
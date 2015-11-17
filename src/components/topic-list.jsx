var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');
// var TopicStore = require('../stores/topic-store') //two dots to go up
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
      {this.renderTopics()}
    </div>
  },

  renderTopics: function(){
    return this.state.topics.slice(0,4).map(function(topic){
      return <Link to={"topics/" + topic.id}className="list-group-item" key={topic.id}>
        <h3>{topic.name}</h3>
        <p>{topic.description}</p>
      </Link>
    })
  },

  onChange: function(event, topics){
    this.setState({topics: topics});
  }
})
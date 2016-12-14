//Parent App within homepage.html
//Allows users to view events, create and view event planning details
import React from 'react';
import EventList from './EventList.jsx';
import EventPlanning from './EventPlanning.jsx';
import CreateEventApp from './CreateEventApp.jsx';
import Nav from './Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: null,
      featuredEvent: null
    };
    this.handleEntryClick = this.handleEntryClick.bind(this);
  }
  componentDidMount() {
    //sends a get request to the server to populate the eventList array in this component's state,
    //which gets passed as a prop into the Eventlist component
    var successHandler = function(data) {
      console.log(data);
      this.setState({eventList: data});
    };
    $.ajax({
      method: 'GET',
      url: '/eventTable',
      success: successHandler.bind(this)
    });
  }

  handleEntryClick(event) {
    this.setState({
      page: 'eventDetails',
      featuredEvent: event
    });
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;
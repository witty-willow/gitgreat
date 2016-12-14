//Parent App within homepage.html
//Allows users to view events, create and view event planning details
import React from 'react';
import EventList from './EventList.jsx';
import EventPlanning from './EventPlanning.jsx';
import CreateEventApp from './CreateEventApp.jsx';
import {browserHistory} from 'react-router';
import Nav from './Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredEvent: {}
    }
    this.handleEntryClick = this.handleEntryClick.bind(this);
  }
  handleEntryClick(event) {
    this.setState({
      featuredEvent: event,
    }, function() {
      browserHistory.push('/planning');
    });
  }
  render() {
    return (
      <div>
        <Nav />
        {this.props.children && React.cloneElement(this.props.children, {
          featuredEvent: this.state.featuredEvent,
          handleEntryClick: this.handleEntryClick
        })}
      </div>
    );
  }
}

module.exports = App;
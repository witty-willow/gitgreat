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
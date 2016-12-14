import React from 'react';
import EventListEntry from './EventListEntry.jsx';
import db from '../../db/index.js';
import $ from 'jquery'

//Child component within HomepageApp
//Will receive the eventList in an array as a prop and will create EventListEntries for each event
class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming: [],
      completed: []
    };
  }
  ComponentDidMount() {
    //This function will sort the events in the eventList into two categories: upcoming and completed
    //The sort logic compares the event date with the current date and checks to see if the event
    //has already passed.
    console.log('did u mount bro')
    db.EventTable.findAll(function(data) {
      console.log(data)
      var upcoming = [];
      var completed = [];
      data.forEach((event) => {
        var now = new Date();
        var eventDate = new Date(event.when);
        if (eventDate >= now) {
          upcoming.push(event);
        } else {
          completed.push(event);
        }
      });
      this.setState({upcoming: upcoming, completed: completed});
    })
  }

  render() {
    return (
      <div>
        <div className='featureBody' id='upcoming'>
          <h2>Upcoming Events</h2>
          {this.state.upcoming.map((event, index) => {
            return (
              <EventListEntry
                key={index} event={event}
                handleEntryClick={this.props.handleEntryClick}
              />
            );
          })}
        </div>
        <div className='featureBody' id='completed'>
          <h2>Completed Events</h2>
            {this.state.completed.map((event, index) => {
              return (
                <EventListEntry
                  key={index} event={event}
                  handleEntryClick={this.props.handleEntryClick}
                />
              );
            })}
        </div>
      </div>
    );
  }
}


module.exports = EventList;
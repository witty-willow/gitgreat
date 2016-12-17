import React from 'react';
import EventMap from './EventMap.jsx';
import EventDetails from './EventDetails.jsx';

class EventMapAndDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <EventMap featuredEvent={this.props.featuredEvent}/>
        <EventDetails featuredEvent={this.props.featuredEvent}/>
      </div>
    );
  }
}

module.exports = EventMapAndDetails;
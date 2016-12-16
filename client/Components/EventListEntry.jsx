//Child component within EventList (contained within HomepageApp)
import React from 'react';
import moment from 'moment';

var EventListEntry = (props) => (
  <div className="listEntry" >
    <button className='deleteBtn' onClick={() => props.handleDeleteClick(props.event)}>
      Remove Event
    </button>
    <div onClick={() => props.handleEntryClick(props.event)}>
      <strong>{props.event.name}</strong><br />
      Location: {props.event.location.label}<br />
      Time: {moment(props.event.when).add(8, 'hour').calendar()}<br />
    </div>
  </div>
);

module.exports = EventListEntry;
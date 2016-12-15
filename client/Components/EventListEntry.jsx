//Child component within EventList (contained within HomepageApp)
import React from 'react';
import moment from 'moment';

var EventListEntry = (props) => (
  <div className="listEntry" onClick={() => props.handleEntryClick(props.event)}>
    <strong>{props.event.name}</strong><br />
    Location: {props.event.where}<br />
    Time: {moment(props.event.when).utcOffset(0).calendar()}<br />
  </div>
);

module.exports = EventListEntry;
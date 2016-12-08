var EventList = (props) => (
  <div>
    {props.eventData.map((event) => 
      <EventListEntry event={event} key={event.ID}/>
    )}
  </div>
);

window.EventList = EventList;
var EventListEntry = (props) => (
  <div onClick={() => props.handleEntryClick(props.event)}>
    {props.event.id}<br />
    {props.event.name}<br />
    {props.event.where}<br />
    {props.event.when}<br/>
  </div>
);

window.EventListEntry = EventListEntry;
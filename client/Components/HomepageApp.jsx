var App = (props) => {
  return (
    <div>
      <Nav />
      <EventList eventData={props.eventData}/>
    </div>
  );
};  


window.App = App;
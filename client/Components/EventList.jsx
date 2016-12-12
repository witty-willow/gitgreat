class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming: [],
      completed: []
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.eventData) {
      var upcoming = [];
      var completed = [];
      nextProps.eventData.forEach((event) => {
        var now = new Date();
        var eventDate = new Date(event.when);
        if (eventDate >= now) {
          upcoming.push(event);
        } else {
          completed.push(event);
        }
      });
      this.setState({upcoming: upcoming, completed: completed});
    }
  }

  render() {
    return (
      <div>
        <div id='upcoming'> 
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
        <div id='completed'> 
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


window.EventList = EventList;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: null,
      page: 'homepage',
      featuredEvent: null
    };
    this.handleEntryClick = this.handleEntryClick.bind(this);
  }
  componentDidMount() {
    var successHandler = function(data) {
      console.log(data);
      this.setState({eventList: data});
    };
    $.ajax({
      method: 'GET',
      url: '/eventTable',
      success: successHandler.bind(this)
    });
  }

  handleEntryClick(event) {
    this.setState({
      page: 'eventDetails',
      featuredEvent: event
    });
  }

  render() {
    var view;
    if (this.state.page === 'homepage') {
      view = 
        (<div>
          <EventList
            eventData={this.state.eventList}
            handleEntryClick={this.handleEntryClick}
          />;
        </div>);
    } else if (this.state.page === 'eventDetails') {
      view = <EventPlanning featuredEvent={this.state.featuredEvent}/>;
    }

    return (
      <div>
        <Nav />
        {view}
      </div>
    );
  }
}


window.App = App;
class CreateEventApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      when: '',
      where: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLocChange = this.handleLocChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleDateChange(event) {
    this.setState({when: event.target.value});
  }
  handleLocChange(event) {
    this.setState({where: event.target.value});
  }

  handleEventSubmit(event) {
    var successHandler = function() {
      $('#msg').text('event successfully posted');
    };
    $.ajax({
      method: 'POST',
      url: '/eventTable',
      contentType: 'application/json',
      data: JSON.stringify(this.state),
      success: successHandler.bind(this)
    });
    event.preventDefault();
  } 
  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.handleEventSubmit}>
          <label>
            Event Name:
            <input type="text" name="name" 
              value={this.state.name}
              onChange={this.handleNameChange}/>
          </label>
          <label>
            Event Date:
            <input type="datetime-local" name="date" 
              value={this.state.when}
              onChange={this.handleDateChange}/>
          </label>
          <label>
            Event Location:
            <input type="text" name="location" 
              value={this.state.where}
              onChange={this.handleLocChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div id='msg'></div>
      </div>
    );
  }
}

window.CreateEventApp = CreateEventApp;
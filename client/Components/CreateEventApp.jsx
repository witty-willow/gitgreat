import React from 'react';
import Nav from './Nav.jsx';
import {browserHistory} from 'react-router';
//Parent App within createEvent.html
//Allows users to create new events
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
    //sends a post request with the event data to the server, which will enter the event into
    //the eventTable
    var now = new Date();
    var eventDate = new Date(this.state.when);
    if(eventDate > now) {
      $.ajax({
        method: 'POST',
        url: '/eventTable',
        contentType: 'application/json',
        data: JSON.stringify(this.state),
        success: browserHistory.push('/')
      });
      event.preventDefault();
    } else {
      $('#msg').text('event is in the past');
      event.preventDefault();
    }
  }
  render() {
    return (
      <div>
        <div className="featureBody" id="createEvent">
          <form onSubmit={this.handleEventSubmit}>
            <p><label>
              Name:
              <input type="text" name="name"
                value={this.state.name}
                onChange={this.handleNameChange}/>
            </label></p>
            <p><label>
              Date:
              <input type="datetime-local" name="date"
                value={this.state.when}
                onChange={this.handleDateChange}/>
            </label></p>
            <p><label>
              Location:
              <input type="text" name="location"
                value={this.state.where}
                onChange={this.handleLocChange}/>
            </label></p>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id='msg'></div>
      </div>
    );
  }
}

module.exports = CreateEventApp;
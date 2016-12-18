import React from 'react';
import moment from 'moment';
import {Grid, Row, Col, Table} from 'react-bootstrap';
//Child component within the Event Planning component
//Allows users to send a reminder for purposes of event planning
class Reminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      msg: '',
      when: '',
      reminders: []
    };
    this.handleWhenChange = this.handleWhenChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleReminderSubmit = this.handleReminderSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchReminders();
  }

  componentDidUpdate() {
    this.fetchReminders();
  }

  fetchReminders() {
    //The event name is passed along to the server via query parameters
    //so that we can display reminders associated with a specific event.
    var eventParam = this.props.featuredEvent.name.split(' ').join('_');
    var successHandler = function(data) {

      if (data.length !== this.state.reminders.length) {

        this.setState({reminders: data}); 
      }
    };
    $.ajax({
      method: 'GET',
      url: '/reminders?eventName=' + eventParam,
      success: successHandler.bind(this)
    });
  }

  handlePhoneNumberChange(event) {
    this.setState({phoneNumber: event.target.value});
  }
  handleMsgChange(event) {
    this.setState({msg: event.target.value});
  }
  handleWhenChange(event) {
    this.setState({when: event.target.value});
  }

  handleReminderSubmit(event) {
    //The event name is passed along to the server via query parameters
    //so that we can submit reminders associated with a specific event.

    var successHandler = function() {
      this.fetchReminders();
    };
    console.log(this.state);

    var eventParam = this.props.featuredEvent.name.split(' ').join('_');
    $.ajax({
      method: 'POST',
      url: '/reminders?eventName=' + eventParam,
      contentType: 'application/json',
      data: JSON.stringify(this.state),
      success: successHandler.bind(this),
    });
    event.preventDefault();
  }

  render() {
    return (
      <Grid  className='remindForm'>
        <div>
          <h2>Reminders</h2>
          <form onSubmit={this.handleReminderSubmit}>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handlePhoneNumberChange}/>
            </label>
            <label>
              When:
              <input type="datetime-local" name="when"
                value={this.state.when}
                onChange={this.handleWhenChange}/>
            </label>
            <label>
              Msg:
              <input type="text" name="msg"
                value={this.state.msg}
                onChange={this.handleMsgChange}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>  
        <div id='msg'></div>
        <Table responsive>
          <caption>Reminder List</caption>
          <thead>
            <tr>
              <th>PhoneNumber</th>
              <th>When</th>
              <th>Msg</th>
            </tr>
          </thead>
          <tbody>
            {this.state.reminders.map( (reminder, index) =>
              <tr key={index}>
                <th>{reminder.phoneNumber}</th>
                <th>{moment(reminder.when).add(8, 'hour').calendar()}</th>
                <th>{reminder.msg}</th>
              </tr>
            )}
          </tbody>
        </Table>
      </Grid>
    );
  }
}

module.exports = Reminders;
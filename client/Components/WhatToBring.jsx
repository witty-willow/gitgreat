import React from 'react';
import helpers from './WhatToBringHelpers.jsx';
import Promise from 'bluebird';

//Child component within the Event Planning component
//Allows users to create a list of items that need to be brought to an event;
class WhatToBring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [{item: 'mashed potatoes', cost: '20', owner: 'Jenn'}],
      currentItem: null,
      currentOwner: null,
      currentCost: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
    this.fetchItems = this.fetchItems.bind(this);

    this.countUniqueUsers = helpers.countUniqueUsers.bind(this);
  }
  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    //The event name is passed along to the server via query parameters
    //so that we can display the itemlist associated with a specific event
    var eventParam = this.props.featuredEvent.name.split(' ').join('_');
    var successHandler = function(data) {
      this.setState({itemList: data});
    };
    $.ajax({
      method: 'GET',
      url: '/itemList?eventName=' + eventParam,
      success: successHandler.bind(this)
    });
  }

  handleSubmit(event) {
    //The event name is passed along to the server via query parameters
    //so that we can post to the itemlistTable associated with a specific event
    var item = {
      item: this.state.currentItem,
      cost: this.state.currentCost,
      owner: this.state.currentOwner
    };
    var successHandler = function(data) {
      this.fetchItems();
    };
    var eventParam = this.props.featuredEvent.name.split(' ').join('_');
    $.ajax({
      method: 'POST',
      url: '/itemList?eventName=' + eventParam,
      data: JSON.stringify(item),
      contentType: 'application/json',
      success: successHandler.bind(this)
    });
    event.preventDefault();
  }

  handleItemChange(event) {
    this.setState({
      currentItem: event.target.value
    });
  }
  handleOwnerChange(event) {
    this.setState({
      currentOwner: event.target.value
    });
  }
  handleCostChange(event) {
    this.setState({
      currentCost: event.target.value
    });
  }

  render() {

    // A promise that returns an object with each user and how much they spent
    this.countUniqueUsers().then(function(data){
      var ledger = calcAmountOwed(data);

      var messages = [];
      var payees = [];
      var payers = [];

      ledger.forEach(function(attendee) {
        if (attendee.amountOwed > 0) {
          payers.push(attendee);
        } else if (attendee.amountOwed < 0) {
          payees.push(attendee);
        }
      })
      
      // while (payees.length)
      // payee 0 is up
      // currentPayee = payee

        // if payer.amountowed + payee.amountowed < 0
          // payee amount owed += payer.amountowed
          // messages.push(payer 'owes' payee payer.amountowed )

        // if payer.amountowed + payee.amountowed === 0
          // payee amount owed += payer.amountowed
          // messages.push(payer 'owes' payee payer.amountowed )

        // if payer.amountowed + payee.amountowed > 0
          // payer amount owed += payee.amountowed
          // messages.push(payer 'owes' payee negative payee.amountowed)


    });

    return (
      <div>
        <form className="bringForm" onSubmit={this.handleSubmit}>
          <label>
            Owner:
          <input type='text' name='owner'
            onChange={this.handleOwnerChange}
          />
          </label>
          <label>
            Item:
            <input type='text' name='item'
              onChange={this.handleItemChange}
            />
          </label>
          <label>
            Cost:
            <input type='text' name='cost'
              onChange={this.handleCostChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <table className="bringTable">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Item</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.state.itemList.map( (item, index) =>
              <tr key={index}>
                <th>{item.owner}</th>
                <th>{item.item}</th>
                <th>{'$' + item.cost}</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = WhatToBring;
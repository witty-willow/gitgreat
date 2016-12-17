import React from 'react';
import moment from 'moment';
// Name
// Location
// Date
// Time
// Category
class EventDetails extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.featuredEvent.name}</h1>
        <p>{this.props.featuredEvent.location.address}</p>
        <p>{moment(this.props.featuredEvent.when).add(8, 'hours').calendar()}</p>
        <h3>Categories</h3>
        <ul>
          {this.props.featuredEvent.location.categories.map(function(category) {
            return <li>{category}</li>;
          })}
        </ul>
      </div>
    );
  }
}

module.exports = EventDetails;
import React from 'react';
import WhatToBring from './WhatToBring.jsx';
import Activities from './Activities.jsx';
import Reminders from './Reminders.jsx';
import Photos from './Photos.jsx';
import FeatureNavigation from './FeatureNavigation.jsx';
import moment from 'moment';

//Child component contained within HomepageApp
//Contains the event planning navigation bar
class EventPlanning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'what-to-bring'
    };

    this.changeTabDisplay = this.changeTabDisplay.bind(this);
  }

  changeTabDisplay(e) {
    console.log(this.props.featuredEvent);
    console.log(e.target.value);
    this.setState({
      currentTab: e.target.value
    });
  }

  render() {
    var mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDMwCZtOT8kkwzQuDfktBsoC6hUR5USgRI
          &q=place_id:${this.props.featuredEvent.location.placeID}`;
    var styles = {
      map: {
        height: "600px",
        width: "450px",
        border: "0"
      }
    }
    return (
      <div>
      <FeatureNavigation changeDisplay={this.changeTabDisplay} />

      <h1 className="eventHeader">
      {this.props.featuredEvent.name} | {this.props.featuredEvent.location.label.split(',')[0]} | {moment(this.props.featuredEvent.when).add(8, 'hour').calendar()}
      </h1>
      {
        this.props.children && React.cloneElement(this.props.children, {
            featuredEvent: this.props.featuredEvent
        })
      }
      <iframe
        style={styles.map}
        frameBorder="0"
        src={mapSrc} allowFullScreen>
      </iframe>
      </div>
    );
  }
}
module.exports = EventPlanning;


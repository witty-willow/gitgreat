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
    // var view;
    // if (this.state.tab === 'whatToBringBtn') {
    //   view = <WhatToBring featuredEvent={this.props.featuredEvent}/>;
    // } else if (this.state.tab === 'activitiesBtn') {
    //   view = <Activities />;
    // } else if (this.state.tab === 'reminderBtn') {
    //   view = <Reminders featuredEvent={this.props.featuredEvent}/>;
    // } else if (this.state.tab === 'photosBtn') {
    //  view = <Photos uploadFile={this.uploadFile} />;
    // }
    console.log(this.props.featuredEvent);
    return (
      <div>
      <FeatureNavigation changeDisplay={this.changeTabDisplay} />

      <h1 className="eventHeader">
      {this.props.featuredEvent.name} | {this.props.featuredEvent.location.label.split(',')[0]} | {moment(this.props.featuredEvent.when).calendar()}
      </h1>

      {
        this.props.children &&
        React.cloneElement(this.props.children, {
            featuredEvent: this.props.featuredEvent
        })
      }

      </div>
    );
  }
}
module.exports = EventPlanning;


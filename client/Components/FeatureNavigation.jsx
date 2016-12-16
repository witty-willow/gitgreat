//Child component within the Event Planning component
//Allows user to navigate between the event planning details
import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import {Button} from 'react-bootstrap';

var FeatureNavigation = (props) => (
  <div id="eventNav">
    <center>
    
    <Button className="featureBtn">
    <Link href='#' className="wtbBtn" id="firstBtn" 
    value="whatToBringBtn" to={'/planning/what-to-bring'}>
    What To Bring
    </Link>
    </Button>

    <Button className="featureBtn">
    <Link href='#' className="infoBtn" value="infoBtn" to={'/planning/info'}>
    Info 
    </Link>
    </Button>

    <Button className="featureBtn">
    <Link href='#' className="reminderBtn" value="reminderBtn" to={'/planning/reminders'}>
    Reminders
    </Link>
    </Button>

    <Button className="featureBtn">
    <Link href='#' className="photosBtn" value="photosBtn" to={'/planning/photos'}>
    Photos
    </Link>
    </Button>

    <Button className="featureBtn">
    <Link href='#' className="chatBtn" value="chatBtn" to={'/planning/bulletin'}>
    Bulletin
    </Link>
    </Button>

    </center>
  </div>
);

module.exports = FeatureNavigation;
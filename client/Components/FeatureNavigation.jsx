//Child component within the Event Planning component
//Allows user to navigate between the event planning details
import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
var FeatureNavigation = (props) => (
  <div id="eventNav">
    <center>
    <button>
    <Link href='#' className="wtbBtn" id="firstBtn" 
    value="whatToBringBtn" to={'/planning/what-to-bring'}>
    What To Bring
    </Link>
    </button>

    <button href='#' className="chatBtn" value="infoBtn">
    <Link href='#' className="infoBtn" value="infoBtn" to={'/planning/info'}>
    Info 
    </Link>
    </button>

    <button>
    <Link href='#' className="reminderBtn" value="reminderBtn" to={'/planning/reminders'}>
    Reminders
    </Link>
    </button>

    <button>
    <Link href='#' className="photosBtn" value="photosBtn" to={'/planning/photos'}>
    Photos
    </Link>
    </button>

    <button href='#' className="chatBtn" value="chatBtn">
    Chatroom (IP)
    </button>


    </center>
  </div>
);

module.exports = FeatureNavigation;
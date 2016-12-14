import ReactDOM from 'react-dom';
import HomepageApp from './Components/HomepageApp.jsx';
import CreateEventApp from './Components/CreateEventApp.jsx';
import EventList from './Components/EventList.jsx';
import EventPlanning from './Components/EventPlanning.jsx';
import Reminders from './Components/Reminders.jsx';
import Photos from './Components/Photos.jsx';
import WhatToBring from './Components/WhatToBring.jsx';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import React from 'react';

//Renders the HomepageApp component on homepage.html
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={HomepageApp}> 
      <IndexRoute component={EventList} />
      <Route path="create" component={CreateEventApp} />
      <Route path="list" component={EventList}/> 
      <Route path="planning" component={EventPlanning}> 
        <Route path="reminders" component={Reminders} />
        <Route path="photos" component={Photos} />
        <Route path="what-to-bring" component={WhatToBring} />
      </Route>
    </Route>
  </Router>
  ), document.getElementById('HomepageApp') 
);
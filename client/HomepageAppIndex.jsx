import ReactDOM from 'react-dom';
import HomepageApp from './Components/HomepageApp.jsx';
import CreateEventApp from './Components/CreateEventApp.jsx';
import EventList from './Components/EventList.jsx';
import EventPlanning from './Components/EventPlanning.jsx';
import Reminders from './Components/Reminders.jsx';
import Photos from './Components/Photos.jsx';
import WhatToBring from './Components/WhatToBring.jsx';
import {Route, Link, browserHistory, IndexRoute} from 'react-router';
import React from 'react';
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink, HomeRoute, LoginRoute } from 'react-stormpath';
import LoginPage from './Components/LoginPage.jsx'
import RegistrationPage from './Components/RegistrationPage.jsx'

ReactStormpath.init({

    endpoints: {
    baseUri: 'http://localhost:3000', // E.g. https://api.example.com
    register: '/register',
    create: '/create',
    login: '/login',
    list: '/list',
    planning: '/planning',
    reminders: '/reminders',
    photos: '/photos',
    'what-to-bring': '/what-to-bring'
  }
  // See docs for available configuration options.
});
//TENANT -- copper-bow
//MIGHT NEED TO ACCESS USER STATE IN COMPONENTS

//Renders the HomepageApp component on index.html
ReactDOM.render((
  <Router history={browserHistory}>
    <HomeRoute path="/" component={HomepageApp} /> 
      { /*<IndexRoute component={EventList} /> */}
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/register' component={RegistrationPage} />
      <AuthenticatedRoute>
        <HomeRoute path='/list' component={EventList} />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="create" component={CreateEventApp} />
      <AuthenticatedRoute path="list" component={EventList}/>
      <AuthenticatedRoute path="planning" component={EventPlanning} /> 
        <AuthenticatedRoute path="reminders" component={Reminders} />
        <AuthenticatedRoute path="photos" component={Photos} />
        <AuthenticatedRoute path="what-to-bring" component={WhatToBring} />
  </Router>
  ), document.getElementById('HomepageApp') 
);
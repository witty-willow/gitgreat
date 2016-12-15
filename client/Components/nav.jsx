//Child component within the HomepageApp and the CreateEventApp to toggle
//between the two App pages.
import React from 'react';
import {Link} from 'react-router';
import {LoginLink, LogoutLink, Authenticated, NotAuthenticated} from 'react-stormpath'

var Nav = ({handleCreateClick}) => (
  <div className="nav">
    <Link to={'/'} className='title'>Friends</Link>
    <Link to={'/'}>Home </Link>
    <Link to={'/create'} >Create Event</Link>
    <NotAuthenticated>
      <LoginLink>Login</LoginLink>
    </NotAuthenticated>
    <Authenticated>
      <LogoutLink>Logout</LogoutLink>
    </Authenticated>
  </div>
);

module.exports = Nav;
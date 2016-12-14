//Child component within the HomepageApp and the CreateEventApp to toggle
//between the two App pages.
import React from 'react';
import {Link} from 'react-router';

var Nav = ({handleCreateClick}) => (
  <div className="nav">
    <Link to={'/'} className='title'>Friends</Link>
    <Link to={'/'}>Home </Link>
    <Link to={'/create'} >Create Event</Link>
    <Link to={'/login'}>Log In</Link>
  </div>
);

module.exports = Nav;
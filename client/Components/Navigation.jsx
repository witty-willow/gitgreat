//Child component within the HomepageApp and the CreateEventApp to toggle
//between the two App pages.
import React from 'react';
import {Link} from 'react-router';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {LoginLink, LogoutLink, Authenticated, NotAuthenticated} from 'react-stormpath'

//MIGHT NEED TO ACCESS USER STATE IN COMPONENTS

var Navigation = ({handleCreateClick}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'} className='title'>Friends</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>

      <NavItem>
        <Link to={'/'}>Home </Link>
      </NavItem>

      <NavItem>
        <Link to={'/create'} >Create Event</Link>
      </NavItem> 

      <NavItem>
        <NotAuthenticated>
          <LoginLink>Login</LoginLink>
        </NotAuthenticated>
        <Authenticated>
          <LogoutLink>Logout</LogoutLink>
        </Authenticated>
      </NavItem>  

      <NavItem>
        <Link to={'/register'}> Register </Link>
      </NavItem>
    
    </Nav>
  </Navbar>

    
);

module.exports = Navigation;
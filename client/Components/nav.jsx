//Child component within the HomepageApp and the CreateEventApp to toggle
//between the two App pages.
import {Link} from 'react-router'

var Nav = ({handleCreateClick}) => (
  <div className="nav">
    <a href='/' className="title">Friends</a>
    <a href='/'>Home </a>
    <Link to={'/create'} >Create Event</Link>
    <a href='#'>Log In</a>
  </div>
);

module.exports = Nav;
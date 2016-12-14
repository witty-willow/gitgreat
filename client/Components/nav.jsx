//Child component within the HomepageApp and the CreateEventApp to toggle
//between the two App pages.
var Nav = ({handleCreateClick}) => (
  <div className="nav">
  	<a href='/' className="title">Friends</a>
    <a href='/'>Home </a>
    <a onClick={handleCreateClick}>Create Event</a>
    <a href='#'>Log In</a>
  </div>
);

module.exports = Nav;
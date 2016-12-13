"use strict";

//Child component within the HomepageApp and the CreateEventApp to toggle 
//between the two App pages.
var Nav = function Nav(_ref) {
  var handleCreateClick = _ref.handleCreateClick;
  return React.createElement(
    "div",
    { className: "nav" },
    React.createElement(
      "a",
      { href: "/", className: "title" },
      "Friends"
    ),
    React.createElement(
      "a",
      { href: "/" },
      "Home "
    ),
    React.createElement(
      "a",
      { onClick: handleCreateClick },
      "Create Event"
    ),
    React.createElement(
      "a",
      { href: "#" },
      "Log In"
    )
  );
};

window.Nav = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL25hdi5qc3giXSwibmFtZXMiOlsiTmF2IiwiaGFuZGxlQ3JlYXRlQ2xpY2siLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBLElBQUlBLE1BQU0sU0FBTkEsR0FBTTtBQUFBLE1BQUVDLGlCQUFGLFFBQUVBLGlCQUFGO0FBQUEsU0FDUjtBQUFBO0FBQUEsTUFBSyxXQUFVLEtBQWY7QUFDQztBQUFBO0FBQUEsUUFBRyxNQUFLLEdBQVIsRUFBWSxXQUFVLE9BQXRCO0FBQUE7QUFBQSxLQUREO0FBRUU7QUFBQTtBQUFBLFFBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQSxLQUZGO0FBR0U7QUFBQTtBQUFBLFFBQUcsU0FBU0EsaUJBQVo7QUFBQTtBQUFBLEtBSEY7QUFJRTtBQUFBO0FBQUEsUUFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBSkYsR0FEUTtBQUFBLENBQVY7O0FBU0FDLE9BQU9GLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NoaWxkIGNvbXBvbmVudCB3aXRoaW4gdGhlIEhvbWVwYWdlQXBwIGFuZCB0aGUgQ3JlYXRlRXZlbnRBcHAgdG8gdG9nZ2xlIFxuLy9iZXR3ZWVuIHRoZSB0d28gQXBwIHBhZ2VzLlxudmFyIE5hdiA9ICh7aGFuZGxlQ3JlYXRlQ2xpY2t9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gIFx0PGEgaHJlZj0nLycgY2xhc3NOYW1lPVwidGl0bGVcIj5GcmllbmRzPC9hPlxuICAgIDxhIGhyZWY9Jy8nPkhvbWUgPC9hPlxuICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUNsaWNrfT5DcmVhdGUgRXZlbnQ8L2E+XG4gICAgPGEgaHJlZj0nIyc+TG9nIEluPC9hPlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5OYXYgPSBOYXY7Il19
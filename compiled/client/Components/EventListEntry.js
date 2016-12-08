"use strict";

var EventListEntry = function EventListEntry(props) {
  return React.createElement(
    "div",
    null,
    props.event.ID,
    React.createElement("br", null),
    props.event.Name,
    React.createElement("br", null),
    props.event.Where,
    React.createElement("br", null),
    props.event.When,
    React.createElement("br", null)
  );
};

window.EventListEntry = EventListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50TGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJFdmVudExpc3RFbnRyeSIsInByb3BzIiwiZXZlbnQiLCJJRCIsIk5hbWUiLCJXaGVyZSIsIldoZW4iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFEO0FBQUEsU0FDbkI7QUFBQTtBQUFBO0FBQ0dBLFVBQU1DLEtBQU4sQ0FBWUMsRUFEZjtBQUNrQixtQ0FEbEI7QUFFR0YsVUFBTUMsS0FBTixDQUFZRSxJQUZmO0FBRW9CLG1DQUZwQjtBQUdHSCxVQUFNQyxLQUFOLENBQVlHLEtBSGY7QUFHcUIsbUNBSHJCO0FBSUdKLFVBQU1DLEtBQU4sQ0FBWUksSUFKZjtBQUlvQjtBQUpwQixHQURtQjtBQUFBLENBQXJCOztBQVNBQyxPQUFPUCxjQUFQLEdBQXdCQSxjQUF4QiIsImZpbGUiOiJFdmVudExpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFdmVudExpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5ldmVudC5JRH08YnIgLz5cbiAgICB7cHJvcHMuZXZlbnQuTmFtZX08YnIgLz5cbiAgICB7cHJvcHMuZXZlbnQuV2hlcmV9PGJyIC8+XG4gICAge3Byb3BzLmV2ZW50LldoZW59PGJyLz5cbiAgPC9kaXY+XG4pO1xuXG53aW5kb3cuRXZlbnRMaXN0RW50cnkgPSBFdmVudExpc3RFbnRyeTsiXX0=
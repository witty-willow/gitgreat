"use strict";

var EventListEntry = function EventListEntry(props) {
  return React.createElement(
    "div",
    { className: "listEntry", onClick: function onClick() {
        return props.handleEntryClick(props.event);
      } },
    React.createElement(
      "strong",
      null,
      props.event.name
    ),
    React.createElement("br", null),
    "Location: ",
    props.event.where,
    React.createElement("br", null),
    "Time: ",
    props.event.when,
    React.createElement("br", null)
  );
};

window.EventListEntry = EventListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50TGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJFdmVudExpc3RFbnRyeSIsInByb3BzIiwiaGFuZGxlRW50cnlDbGljayIsImV2ZW50IiwibmFtZSIsIndoZXJlIiwid2hlbiIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQ7QUFBQSxTQUNuQjtBQUFBO0FBQUEsTUFBSyxXQUFVLFdBQWYsRUFBMkIsU0FBUztBQUFBLGVBQU1BLE1BQU1DLGdCQUFOLENBQXVCRCxNQUFNRSxLQUE3QixDQUFOO0FBQUEsT0FBcEM7QUFDRTtBQUFBO0FBQUE7QUFBU0YsWUFBTUUsS0FBTixDQUFZQztBQUFyQixLQURGO0FBQ3FDLG1DQURyQztBQUFBO0FBRWFILFVBQU1FLEtBQU4sQ0FBWUUsS0FGekI7QUFFK0IsbUNBRi9CO0FBQUE7QUFHU0osVUFBTUUsS0FBTixDQUFZRyxJQUhyQjtBQUcwQjtBQUgxQixHQURtQjtBQUFBLENBQXJCOztBQVFBQyxPQUFPUCxjQUFQLEdBQXdCQSxjQUF4QiIsImZpbGUiOiJFdmVudExpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFdmVudExpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RFbnRyeVwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUVudHJ5Q2xpY2socHJvcHMuZXZlbnQpfT5cbiAgICA8c3Ryb25nPntwcm9wcy5ldmVudC5uYW1lfTwvc3Ryb25nPjxiciAvPlxuICAgIExvY2F0aW9uOiB7cHJvcHMuZXZlbnQud2hlcmV9PGJyIC8+XG4gICAgVGltZToge3Byb3BzLmV2ZW50LndoZW59PGJyIC8+XG4gIDwvZGl2PlxuKTtcblxud2luZG93LkV2ZW50TGlzdEVudHJ5ID0gRXZlbnRMaXN0RW50cnk7Il19
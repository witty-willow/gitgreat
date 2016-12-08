"use strict";

var FeatureNavigation = function FeatureNavigation(props) {
  return React.createElement(
    "div",
    { id: "bottomNav" },
    "Bottom Navigation",
    React.createElement(
      "button",
      { value: "whatToBringBtn", onClick: function onClick() {
          return props.changeDisplay();
        } },
      "What To Bring"
    ),
    React.createElement(
      "button",
      null,
      "Idea Generator (under construction)"
    ),
    React.createElement(
      "button",
      null,
      "Another dummy feature"
    )
  );
};

window.FeatureNavigation = FeatureNavigation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC9FdmVudFBsYW5uaW5nL2NsaWVudC9Db21wb25lbnRzL0ZlYXR1cmVOYXZpZ2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlTmF2aWdhdGlvbiIsInByb3BzIiwiY2hhbmdlRGlzcGxheSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFEO0FBQUEsU0FDdEI7QUFBQTtBQUFBLE1BQUssSUFBRyxXQUFSO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxPQUFNLGdCQUFkLEVBQStCLFNBQVM7QUFBQSxpQkFBTUEsTUFBTUMsYUFBTixFQUFOO0FBQUEsU0FBeEM7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsR0FEc0I7QUFBQSxDQUF4Qjs7QUFRQUMsT0FBT0gsaUJBQVAsR0FBMkJBLGlCQUEzQiIsImZpbGUiOiJGZWF0dXJlTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBGZWF0dXJlTmF2aWdhdGlvbiA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGlkPVwiYm90dG9tTmF2XCI+Qm90dG9tIE5hdmlnYXRpb25cbiAgICA8YnV0dG9uIHZhbHVlPVwid2hhdFRvQnJpbmdCdG5cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VEaXNwbGF5KCl9PldoYXQgVG8gQnJpbmc8L2J1dHRvbj5cbiAgICA8YnV0dG9uPklkZWEgR2VuZXJhdG9yICh1bmRlciBjb25zdHJ1Y3Rpb24pPC9idXR0b24+XG4gICAgPGJ1dHRvbj5Bbm90aGVyIGR1bW15IGZlYXR1cmU8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG53aW5kb3cuRmVhdHVyZU5hdmlnYXRpb24gPSBGZWF0dXJlTmF2aWdhdGlvbjsiXX0=
"use strict";

var FeatureNavigation = function FeatureNavigation(props) {
  return React.createElement(
    "div",
    { id: "bottomNav" },
    React.createElement(
      "button",
      { className: "wtbBtn", value: "whatToBringBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "What To Bring"
    ),
    React.createElement(
      "button",
      { className: "actBtn", value: "activitiesBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Activities (under construction)"
    ),
    React.createElement(
      "button",
      null,
      "Another dummy feature"
    )
  );
};

window.FeatureNavigation = FeatureNavigation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0ZlYXR1cmVOYXZpZ2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlTmF2aWdhdGlvbiIsInByb3BzIiwiZSIsImNoYW5nZURpc3BsYXkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3RCO0FBQUE7QUFBQSxNQUFLLElBQUcsV0FBUjtBQUNFO0FBQUE7QUFBQSxRQUFRLFdBQVUsUUFBbEIsRUFBMkIsT0FBTSxnQkFBakMsRUFBa0QsU0FBUyxpQkFBQ0MsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBM0Q7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLFFBQWxCLEVBQTJCLE9BQU0sZUFBakMsRUFBaUQsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBMUQ7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsR0FEc0I7QUFBQSxDQUF4Qjs7QUFRQUUsT0FBT0osaUJBQVAsR0FBMkJBLGlCQUEzQiIsImZpbGUiOiJGZWF0dXJlTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBGZWF0dXJlTmF2aWdhdGlvbiA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGlkPVwiYm90dG9tTmF2XCI+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3dGJCdG5cIiB2YWx1ZT1cIndoYXRUb0JyaW5nQnRuXCIgb25DbGljaz17KGUpID0+IHByb3BzLmNoYW5nZURpc3BsYXkoZSl9PldoYXQgVG8gQnJpbmc8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdEJ0blwiIHZhbHVlPVwiYWN0aXZpdGllc0J0blwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5jaGFuZ2VEaXNwbGF5KGUpfT5BY3Rpdml0aWVzICh1bmRlciBjb25zdHJ1Y3Rpb24pPC9idXR0b24+XG4gICAgPGJ1dHRvbj5Bbm90aGVyIGR1bW15IGZlYXR1cmU8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG53aW5kb3cuRmVhdHVyZU5hdmlnYXRpb24gPSBGZWF0dXJlTmF2aWdhdGlvbjsiXX0=
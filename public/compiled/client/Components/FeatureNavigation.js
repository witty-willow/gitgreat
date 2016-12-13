"use strict";

var FeatureNavigation = function FeatureNavigation(props) {
  return React.createElement(
    "div",
    { id: "eventNav" },
    React.createElement(
      "button",
      { href: "#", className: "wtbBtn", id: "firstBtn", value: "whatToBringBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "What To Bring"
    ),
    React.createElement(
      "button",
      { href: "#", className: "reminderBtn", value: "reminderBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Reminders"
    ),
    React.createElement(
      "button",
      { href: "#", className: "photosBtn", value: "photosBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Photos"
    ),
    React.createElement(
      "button",
      { href: "#", className: "chatBtn", value: "chatBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Chatroom (IP)"
    )
  );
};

window.FeatureNavigation = FeatureNavigation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0ZlYXR1cmVOYXZpZ2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlTmF2aWdhdGlvbiIsInByb3BzIiwiZSIsImNoYW5nZURpc3BsYXkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3RCO0FBQUE7QUFBQSxNQUFLLElBQUcsVUFBUjtBQUNFO0FBQUE7QUFBQSxRQUFRLE1BQUssR0FBYixFQUFpQixXQUFVLFFBQTNCLEVBQW9DLElBQUcsVUFBdkMsRUFBa0QsT0FBTSxnQkFBeEQsRUFBeUUsU0FBUyxpQkFBQ0MsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBbEY7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxNQUFLLEdBQWIsRUFBaUIsV0FBVSxhQUEzQixFQUF5QyxPQUFNLGFBQS9DLEVBQTZELFNBQVMsaUJBQUNBLENBQUQ7QUFBQSxpQkFBT0QsTUFBTUUsYUFBTixDQUFvQkQsQ0FBcEIsQ0FBUDtBQUFBLFNBQXRFO0FBQUE7QUFBQSxLQUZGO0FBR0U7QUFBQTtBQUFBLFFBQVEsTUFBSyxHQUFiLEVBQWlCLFdBQVUsV0FBM0IsRUFBdUMsT0FBTSxXQUE3QyxFQUF5RCxTQUFTLGlCQUFDQSxDQUFEO0FBQUEsaUJBQU9ELE1BQU1FLGFBQU4sQ0FBb0JELENBQXBCLENBQVA7QUFBQSxTQUFsRTtBQUFBO0FBQUEsS0FIRjtBQUlFO0FBQUE7QUFBQSxRQUFRLE1BQUssR0FBYixFQUFpQixXQUFVLFNBQTNCLEVBQXFDLE9BQU0sU0FBM0MsRUFBcUQsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBOUQ7QUFBQTtBQUFBO0FBSkYsR0FEc0I7QUFBQSxDQUF4Qjs7QUFTQUUsT0FBT0osaUJBQVAsR0FBMkJBLGlCQUEzQiIsImZpbGUiOiJGZWF0dXJlTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBGZWF0dXJlTmF2aWdhdGlvbiA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGlkPVwiZXZlbnROYXZcIj5cbiAgICA8YnV0dG9uIGhyZWY9JyMnIGNsYXNzTmFtZT1cInd0YkJ0blwiIGlkPVwiZmlyc3RCdG5cIiB2YWx1ZT1cIndoYXRUb0JyaW5nQnRuXCIgb25DbGljaz17KGUpID0+IHByb3BzLmNoYW5nZURpc3BsYXkoZSl9PldoYXQgVG8gQnJpbmc8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGhyZWY9JyMnIGNsYXNzTmFtZT1cInJlbWluZGVyQnRuXCIgdmFsdWU9XCJyZW1pbmRlckJ0blwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5jaGFuZ2VEaXNwbGF5KGUpfT5SZW1pbmRlcnM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGhyZWY9JyMnIGNsYXNzTmFtZT1cInBob3Rvc0J0blwiIHZhbHVlPVwicGhvdG9zQnRuXCIgb25DbGljaz17KGUpID0+IHByb3BzLmNoYW5nZURpc3BsYXkoZSl9PlBob3RvczwvYnV0dG9uPlxuICAgIDxidXR0b24gaHJlZj0nIycgY2xhc3NOYW1lPVwiY2hhdEJ0blwiIHZhbHVlPVwiY2hhdEJ0blwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5jaGFuZ2VEaXNwbGF5KGUpfT5DaGF0cm9vbSAoSVApPC9idXR0b24+ICAgIFxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5GZWF0dXJlTmF2aWdhdGlvbiA9IEZlYXR1cmVOYXZpZ2F0aW9uOyJdfQ==
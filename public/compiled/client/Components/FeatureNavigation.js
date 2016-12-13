"use strict";

var FeatureNavigation = function FeatureNavigation(props) {
  return React.createElement(
    "div",
    { id: "eventNav" },
    React.createElement(
      "button",
      { href: "#", className: "wtbBtn firstBtn", value: "whatToBringBtn", onClick: function onClick(e) {
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
      { href: "#", className: "actBtn", value: "activitiesBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Activities (IP)"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0ZlYXR1cmVOYXZpZ2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlTmF2aWdhdGlvbiIsInByb3BzIiwiZSIsImNoYW5nZURpc3BsYXkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3RCO0FBQUE7QUFBQSxNQUFLLElBQUcsVUFBUjtBQUNFO0FBQUE7QUFBQSxRQUFRLE1BQUssR0FBYixFQUFpQixXQUFVLGlCQUEzQixFQUE2QyxPQUFNLGdCQUFuRCxFQUFvRSxTQUFTLGlCQUFDQyxDQUFEO0FBQUEsaUJBQU9ELE1BQU1FLGFBQU4sQ0FBb0JELENBQXBCLENBQVA7QUFBQSxTQUE3RTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFRLE1BQUssR0FBYixFQUFpQixXQUFVLGFBQTNCLEVBQXlDLE9BQU0sYUFBL0MsRUFBNkQsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBdEU7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUEsUUFBUSxNQUFLLEdBQWIsRUFBaUIsV0FBVSxRQUEzQixFQUFvQyxPQUFNLGVBQTFDLEVBQTBELFNBQVMsaUJBQUNBLENBQUQ7QUFBQSxpQkFBT0QsTUFBTUUsYUFBTixDQUFvQkQsQ0FBcEIsQ0FBUDtBQUFBLFNBQW5FO0FBQUE7QUFBQSxLQUhGO0FBSUU7QUFBQTtBQUFBLFFBQVEsTUFBSyxHQUFiLEVBQWlCLFdBQVUsU0FBM0IsRUFBcUMsT0FBTSxTQUEzQyxFQUFxRCxTQUFTLGlCQUFDQSxDQUFEO0FBQUEsaUJBQU9ELE1BQU1FLGFBQU4sQ0FBb0JELENBQXBCLENBQVA7QUFBQSxTQUE5RDtBQUFBO0FBQUE7QUFKRixHQURzQjtBQUFBLENBQXhCOztBQVNBRSxPQUFPSixpQkFBUCxHQUEyQkEsaUJBQTNCIiwiZmlsZSI6IkZlYXR1cmVOYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEZlYXR1cmVOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgaWQ9XCJldmVudE5hdlwiPlxuICAgIDxidXR0b24gaHJlZj0nIycgY2xhc3NOYW1lPVwid3RiQnRuIGZpcnN0QnRuXCIgdmFsdWU9XCJ3aGF0VG9CcmluZ0J0blwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5jaGFuZ2VEaXNwbGF5KGUpfT5XaGF0IFRvIEJyaW5nPC9idXR0b24+XG4gICAgPGJ1dHRvbiBocmVmPScjJyBjbGFzc05hbWU9XCJyZW1pbmRlckJ0blwiIHZhbHVlPVwicmVtaW5kZXJCdG5cIiBvbkNsaWNrPXsoZSkgPT4gcHJvcHMuY2hhbmdlRGlzcGxheShlKX0+UmVtaW5kZXJzPC9idXR0b24+XG4gICAgPGJ1dHRvbiBocmVmPScjJyBjbGFzc05hbWU9XCJhY3RCdG5cIiB2YWx1ZT1cImFjdGl2aXRpZXNCdG5cIiBvbkNsaWNrPXsoZSkgPT4gcHJvcHMuY2hhbmdlRGlzcGxheShlKX0+QWN0aXZpdGllcyAoSVApPC9idXR0b24+XG4gICAgPGJ1dHRvbiBocmVmPScjJyBjbGFzc05hbWU9XCJjaGF0QnRuXCIgdmFsdWU9XCJjaGF0QnRuXCIgb25DbGljaz17KGUpID0+IHByb3BzLmNoYW5nZURpc3BsYXkoZSl9PkNoYXRyb29tIChJUCk8L2J1dHRvbj4gICAgXG4gIDwvZGl2PlxuKTtcblxud2luZG93LkZlYXR1cmVOYXZpZ2F0aW9uID0gRmVhdHVyZU5hdmlnYXRpb247Il19
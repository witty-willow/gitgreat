"use strict";

var FeatureNavigation = function FeatureNavigation(props) {
  return React.createElement(
    "div",
    { id: "bottomNav" },
    "Bottom Navigation",
    React.createElement(
      "button",
      { value: "whatToBringBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "What To Bring"
    ),
    React.createElement(
      "button",
      { value: "activitiesBtn", onClick: function onClick(e) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC9FdmVudFBsYW5uaW5nL2NsaWVudC9Db21wb25lbnRzL0ZlYXR1cmVOYXZpZ2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlTmF2aWdhdGlvbiIsInByb3BzIiwiZSIsImNoYW5nZURpc3BsYXkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3RCO0FBQUE7QUFBQSxNQUFLLElBQUcsV0FBUjtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQVEsT0FBTSxnQkFBZCxFQUErQixTQUFTLGlCQUFDQyxDQUFEO0FBQUEsaUJBQU9ELE1BQU1FLGFBQU4sQ0FBb0JELENBQXBCLENBQVA7QUFBQSxTQUF4QztBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFRLE9BQU0sZUFBZCxFQUE4QixTQUFTLGlCQUFDQSxDQUFEO0FBQUEsaUJBQU9ELE1BQU1FLGFBQU4sQ0FBb0JELENBQXBCLENBQVA7QUFBQSxTQUF2QztBQUFBO0FBQUEsS0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixHQURzQjtBQUFBLENBQXhCOztBQVFBRSxPQUFPSixpQkFBUCxHQUEyQkEsaUJBQTNCIiwiZmlsZSI6IkZlYXR1cmVOYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEZlYXR1cmVOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgaWQ9XCJib3R0b21OYXZcIj5Cb3R0b20gTmF2aWdhdGlvblxuICAgIDxidXR0b24gdmFsdWU9XCJ3aGF0VG9CcmluZ0J0blwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5jaGFuZ2VEaXNwbGF5KGUpfT5XaGF0IFRvIEJyaW5nPC9idXR0b24+XG4gICAgPGJ1dHRvbiB2YWx1ZT1cImFjdGl2aXRpZXNCdG5cIiBvbkNsaWNrPXsoZSkgPT4gcHJvcHMuY2hhbmdlRGlzcGxheShlKX0+QWN0aXZpdGllcyAodW5kZXIgY29uc3RydWN0aW9uKTwvYnV0dG9uPlxuICAgIDxidXR0b24+QW5vdGhlciBkdW1teSBmZWF0dXJlPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxud2luZG93LkZlYXR1cmVOYXZpZ2F0aW9uID0gRmVhdHVyZU5hdmlnYXRpb247Il19
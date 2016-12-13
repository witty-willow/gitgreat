'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Child component within HomepageApp
//Will receive the eventList in an array as a prop and will create EventListEntries for each event
var EventList = function (_React$Component) {
  _inherits(EventList, _React$Component);

  function EventList(props) {
    _classCallCheck(this, EventList);

    var _this = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this, props));

    _this.state = {
      upcoming: [],
      completed: []
    };
    return _this;
  }

  _createClass(EventList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      //This function will sort the events in the eventList into two categories: upcoming and completed
      //The sort logic compares the event date with the current date and checks to see if the event 
      //has already passed.
      if (nextProps.eventData) {
        var upcoming = [];
        var completed = [];
        nextProps.eventData.forEach(function (event) {
          var now = new Date();
          var eventDate = new Date(event.when);
          if (eventDate >= now) {
            upcoming.push(event);
          } else {
            completed.push(event);
          }
        });
        this.setState({ upcoming: upcoming, completed: completed });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'featureBody', id: 'upcoming' },
          React.createElement(
            'h2',
            null,
            'Upcoming Events'
          ),
          this.state.upcoming.map(function (event, index) {
            return React.createElement(EventListEntry, {
              key: index, event: event,
              handleEntryClick: _this2.props.handleEntryClick
            });
          })
        ),
        React.createElement(
          'div',
          { className: 'featureBody', id: 'completed' },
          React.createElement(
            'h2',
            null,
            'Completed Events'
          ),
          this.state.completed.map(function (event, index) {
            return React.createElement(EventListEntry, {
              key: index, event: event,
              handleEntryClick: _this2.props.handleEntryClick
            });
          })
        )
      );
    }
  }]);

  return EventList;
}(React.Component);

window.EventList = EventList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50TGlzdC5qc3giXSwibmFtZXMiOlsiRXZlbnRMaXN0IiwicHJvcHMiLCJzdGF0ZSIsInVwY29taW5nIiwiY29tcGxldGVkIiwibmV4dFByb3BzIiwiZXZlbnREYXRhIiwiZm9yRWFjaCIsImV2ZW50Iiwibm93IiwiRGF0ZSIsImV2ZW50RGF0ZSIsIndoZW4iLCJwdXNoIiwic2V0U3RhdGUiLCJtYXAiLCJpbmRleCIsImhhbmRsZUVudHJ5Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFDTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsaUJBQVc7QUFGQSxLQUFiO0FBRmlCO0FBTWxCOzs7OzhDQUN5QkMsUyxFQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLFVBQUlBLFVBQVVDLFNBQWQsRUFBeUI7QUFDdkIsWUFBSUgsV0FBVyxFQUFmO0FBQ0EsWUFBSUMsWUFBWSxFQUFoQjtBQUNBQyxrQkFBVUMsU0FBVixDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JDLGNBQUlDLE1BQU0sSUFBSUMsSUFBSixFQUFWO0FBQ0EsY0FBSUMsWUFBWSxJQUFJRCxJQUFKLENBQVNGLE1BQU1JLElBQWYsQ0FBaEI7QUFDQSxjQUFJRCxhQUFhRixHQUFqQixFQUFzQjtBQUNwQk4scUJBQVNVLElBQVQsQ0FBY0wsS0FBZDtBQUNELFdBRkQsTUFFTztBQUNMSixzQkFBVVMsSUFBVixDQUFlTCxLQUFmO0FBQ0Q7QUFDRixTQVJEO0FBU0EsYUFBS00sUUFBTCxDQUFjLEVBQUNYLFVBQVVBLFFBQVgsRUFBcUJDLFdBQVdBLFNBQWhDLEVBQWQ7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZixFQUE2QixJQUFHLFVBQWhDO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUcsZUFBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CWSxHQUFwQixDQUF3QixVQUFDUCxLQUFELEVBQVFRLEtBQVIsRUFBa0I7QUFDekMsbUJBQ0Usb0JBQUMsY0FBRDtBQUNFLG1CQUFLQSxLQURQLEVBQ2MsT0FBT1IsS0FEckI7QUFFRSxnQ0FBa0IsT0FBS1AsS0FBTCxDQUFXZ0I7QUFGL0IsY0FERjtBQU1ELFdBUEE7QUFGSCxTQURGO0FBWUU7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmLEVBQTZCLElBQUcsV0FBaEM7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFSyxlQUFLZixLQUFMLENBQVdFLFNBQVgsQ0FBcUJXLEdBQXJCLENBQXlCLFVBQUNQLEtBQUQsRUFBUVEsS0FBUixFQUFrQjtBQUMxQyxtQkFDRSxvQkFBQyxjQUFEO0FBQ0UsbUJBQUtBLEtBRFAsRUFDYyxPQUFPUixLQURyQjtBQUVFLGdDQUFrQixPQUFLUCxLQUFMLENBQVdnQjtBQUYvQixjQURGO0FBTUQsV0FQQTtBQUZMO0FBWkYsT0FERjtBQTBCRDs7OztFQXZEcUJDLE1BQU1DLFM7O0FBMkQ5QkMsT0FBT3BCLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IkV2ZW50TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ2hpbGQgY29tcG9uZW50IHdpdGhpbiBIb21lcGFnZUFwcFxuLy9XaWxsIHJlY2VpdmUgdGhlIGV2ZW50TGlzdCBpbiBhbiBhcnJheSBhcyBhIHByb3AgYW5kIHdpbGwgY3JlYXRlIEV2ZW50TGlzdEVudHJpZXMgZm9yIGVhY2ggZXZlbnRcbmNsYXNzIEV2ZW50TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cGNvbWluZzogW10sXG4gICAgICBjb21wbGV0ZWQ6IFtdXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIC8vVGhpcyBmdW5jdGlvbiB3aWxsIHNvcnQgdGhlIGV2ZW50cyBpbiB0aGUgZXZlbnRMaXN0IGludG8gdHdvIGNhdGVnb3JpZXM6IHVwY29taW5nIGFuZCBjb21wbGV0ZWRcbiAgICAvL1RoZSBzb3J0IGxvZ2ljIGNvbXBhcmVzIHRoZSBldmVudCBkYXRlIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSBhbmQgY2hlY2tzIHRvIHNlZSBpZiB0aGUgZXZlbnQgXG4gICAgLy9oYXMgYWxyZWFkeSBwYXNzZWQuXG4gICAgaWYgKG5leHRQcm9wcy5ldmVudERhdGEpIHtcbiAgICAgIHZhciB1cGNvbWluZyA9IFtdO1xuICAgICAgdmFyIGNvbXBsZXRlZCA9IFtdO1xuICAgICAgbmV4dFByb3BzLmV2ZW50RGF0YS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndoZW4pO1xuICAgICAgICBpZiAoZXZlbnREYXRlID49IG5vdykge1xuICAgICAgICAgIHVwY29taW5nLnB1c2goZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBsZXRlZC5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt1cGNvbWluZzogdXBjb21pbmcsIGNvbXBsZXRlZDogY29tcGxldGVkfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZUJvZHknIGlkPSd1cGNvbWluZyc+IFxuICAgICAgICAgIDxoMj5VcGNvbWluZyBFdmVudHM8L2gyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnVwY29taW5nLm1hcCgoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgICAgPEV2ZW50TGlzdEVudHJ5IFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IGV2ZW50PXtldmVudH0gXG4gICAgICAgICAgICAgICAgaGFuZGxlRW50cnlDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVFbnRyeUNsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmZWF0dXJlQm9keScgaWQ9J2NvbXBsZXRlZCc+IFxuICAgICAgICAgIDxoMj5Db21wbGV0ZWQgRXZlbnRzPC9oMj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbXBsZXRlZC5tYXAoKGV2ZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgICAgICA8RXZlbnRMaXN0RW50cnkgXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBldmVudD17ZXZlbnR9IFxuICAgICAgICAgICAgICAgICAgaGFuZGxlRW50cnlDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVFbnRyeUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxud2luZG93LkV2ZW50TGlzdCA9IEV2ZW50TGlzdDsiXX0=
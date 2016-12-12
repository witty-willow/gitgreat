'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50TGlzdC5qc3giXSwibmFtZXMiOlsiRXZlbnRMaXN0IiwicHJvcHMiLCJzdGF0ZSIsInVwY29taW5nIiwiY29tcGxldGVkIiwibmV4dFByb3BzIiwiZXZlbnREYXRhIiwiZm9yRWFjaCIsImV2ZW50Iiwibm93IiwiRGF0ZSIsImV2ZW50RGF0ZSIsIndoZW4iLCJwdXNoIiwic2V0U3RhdGUiLCJtYXAiLCJpbmRleCIsImhhbmRsZUVudHJ5Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyxpQkFBVztBQUZBLEtBQWI7QUFGaUI7QUFNbEI7Ozs7OENBQ3lCQyxTLEVBQVc7QUFDbkMsVUFBSUEsVUFBVUMsU0FBZCxFQUF5QjtBQUN2QixZQUFJSCxXQUFXLEVBQWY7QUFDQSxZQUFJQyxZQUFZLEVBQWhCO0FBQ0FDLGtCQUFVQyxTQUFWLENBQW9CQyxPQUFwQixDQUE0QixVQUFDQyxLQUFELEVBQVc7QUFDckMsY0FBSUMsTUFBTSxJQUFJQyxJQUFKLEVBQVY7QUFDQSxjQUFJQyxZQUFZLElBQUlELElBQUosQ0FBU0YsTUFBTUksSUFBZixDQUFoQjtBQUNBLGNBQUlELGFBQWFGLEdBQWpCLEVBQXNCO0FBQ3BCTixxQkFBU1UsSUFBVCxDQUFjTCxLQUFkO0FBQ0QsV0FGRCxNQUVPO0FBQ0xKLHNCQUFVUyxJQUFWLENBQWVMLEtBQWY7QUFDRDtBQUNGLFNBUkQ7QUFTQSxhQUFLTSxRQUFMLENBQWMsRUFBQ1gsVUFBVUEsUUFBWCxFQUFxQkMsV0FBV0EsU0FBaEMsRUFBZDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmLEVBQTZCLElBQUcsVUFBaEM7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRyxlQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0JZLEdBQXBCLENBQXdCLFVBQUNQLEtBQUQsRUFBUVEsS0FBUixFQUFrQjtBQUN6QyxtQkFDRSxvQkFBQyxjQUFEO0FBQ0UsbUJBQUtBLEtBRFAsRUFDYyxPQUFPUixLQURyQjtBQUVFLGdDQUFrQixPQUFLUCxLQUFMLENBQVdnQjtBQUYvQixjQURGO0FBTUQsV0FQQTtBQUZILFNBREY7QUFZRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWYsRUFBNkIsSUFBRyxXQUFoQztBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVLLGVBQUtmLEtBQUwsQ0FBV0UsU0FBWCxDQUFxQlcsR0FBckIsQ0FBeUIsVUFBQ1AsS0FBRCxFQUFRUSxLQUFSLEVBQWtCO0FBQzFDLG1CQUNFLG9CQUFDLGNBQUQ7QUFDRSxtQkFBS0EsS0FEUCxFQUNjLE9BQU9SLEtBRHJCO0FBRUUsZ0NBQWtCLE9BQUtQLEtBQUwsQ0FBV2dCO0FBRi9CLGNBREY7QUFNRCxXQVBBO0FBRkw7QUFaRixPQURGO0FBMEJEOzs7O0VBcERxQkMsTUFBTUMsUzs7QUF3RDlCQyxPQUFPcEIsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiRXZlbnRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXZlbnRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVwY29taW5nOiBbXSxcbiAgICAgIGNvbXBsZXRlZDogW11cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5ldmVudERhdGEpIHtcbiAgICAgIHZhciB1cGNvbWluZyA9IFtdO1xuICAgICAgdmFyIGNvbXBsZXRlZCA9IFtdO1xuICAgICAgbmV4dFByb3BzLmV2ZW50RGF0YS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LndoZW4pO1xuICAgICAgICBpZiAoZXZlbnREYXRlID49IG5vdykge1xuICAgICAgICAgIHVwY29taW5nLnB1c2goZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBsZXRlZC5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt1cGNvbWluZzogdXBjb21pbmcsIGNvbXBsZXRlZDogY29tcGxldGVkfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZUJvZHknIGlkPSd1cGNvbWluZyc+IFxuICAgICAgICAgIDxoMj5VcGNvbWluZyBFdmVudHM8L2gyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnVwY29taW5nLm1hcCgoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgICAgPEV2ZW50TGlzdEVudHJ5IFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IGV2ZW50PXtldmVudH0gXG4gICAgICAgICAgICAgICAgaGFuZGxlRW50cnlDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVFbnRyeUNsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmZWF0dXJlQm9keScgaWQ9J2NvbXBsZXRlZCc+IFxuICAgICAgICAgIDxoMj5Db21wbGV0ZWQgRXZlbnRzPC9oMj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbXBsZXRlZC5tYXAoKGV2ZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgICAgICA8RXZlbnRMaXN0RW50cnkgXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBldmVudD17ZXZlbnR9IFxuICAgICAgICAgICAgICAgICAgaGFuZGxlRW50cnlDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVFbnRyeUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxud2luZG93LkV2ZW50TGlzdCA9IEV2ZW50TGlzdDsiXX0=
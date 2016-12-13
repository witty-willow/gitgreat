'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Parent App within homepage.html
//Allows users to view events, create and view event planning details


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      eventList: null,
      page: 'homepage',
      featuredEvent: null
    };
    _this.handleEntryClick = _this.handleEntryClick.bind(_this);
    _this.handleCreateClick = _this.handleCreateClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //sends a get request to the server to populate the eventList array in this component's state,
      //which gets passed as a prop into the Eventlist component
      var successHandler = function successHandler(data) {
        console.log(data);
        this.setState({ eventList: data });
      };
      $.ajax({
        method: 'GET',
        url: '/eventTable',
        success: successHandler.bind(this)
      });
    }
  }, {
    key: 'handleEntryClick',
    value: function handleEntryClick(event) {
      this.setState({
        page: 'eventDetails',
        featuredEvent: event
      });
    }
  }, {
    key: 'handleCreateClick',
    value: function handleCreateClick(event) {
      this.setState({
        page: 'createEvent'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var view;
      //view logic: if an event has been clicked on, then the page should view 
      //the eventDetails page--the EventPlanning component. Otherwise, show the 
      //homepage--the EventList component.
      if (this.state.page === 'homepage') {
        view = React.createElement(
          'div',
          null,
          React.createElement(EventList, {
            eventData: this.state.eventList,
            handleEntryClick: this.handleEntryClick
          }),
          ';'
        );
      } else if (this.state.page === 'eventDetails') {
        view = React.createElement(EventPlanning, { featuredEvent: this.state.featuredEvent });
      } else if (this.state.page === 'createEvent') {
        view = React.createElement(CreateEventApp, null);
      }

      return React.createElement(
        'div',
        null,
        React.createElement(Nav, { handleCreateClick: this.handleCreateClick }),
        view
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0hvbWVwYWdlQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXZlbnRMaXN0IiwicGFnZSIsImZlYXR1cmVkRXZlbnQiLCJoYW5kbGVFbnRyeUNsaWNrIiwiYmluZCIsImhhbmRsZUNyZWF0ZUNsaWNrIiwic3VjY2Vzc0hhbmRsZXIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwiZXZlbnQiLCJ2aWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7SUFHTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsSUFEQTtBQUVYQyxZQUFNLFVBRks7QUFHWEMscUJBQWU7QUFISixLQUFiO0FBS0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJELElBQXZCLE9BQXpCO0FBUmlCO0FBU2xCOzs7O3dDQUNtQjtBQUNsQjtBQUNBO0FBQ0EsVUFBSUUsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFTQyxJQUFULEVBQWU7QUFDbENDLGdCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQSxhQUFLRyxRQUFMLENBQWMsRUFBQ1YsV0FBV08sSUFBWixFQUFkO0FBQ0QsT0FIRDtBQUlBSSxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLGFBRkE7QUFHTEMsaUJBQVNULGVBQWVGLElBQWYsQ0FBb0IsSUFBcEI7QUFISixPQUFQO0FBS0Q7OztxQ0FFZ0JZLEssRUFBTztBQUN0QixXQUFLTixRQUFMLENBQWM7QUFDWlQsY0FBTSxjQURNO0FBRVpDLHVCQUFlYztBQUZILE9BQWQ7QUFJRDs7O3NDQUVpQkEsSyxFQUFPO0FBQ3ZCLFdBQUtOLFFBQUwsQ0FBYztBQUNaVCxjQUFNO0FBRE0sT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxVQUFJZ0IsSUFBSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUksS0FBS2xCLEtBQUwsQ0FBV0UsSUFBWCxLQUFvQixVQUF4QixFQUFvQztBQUNsQ2dCLGVBQ0c7QUFBQTtBQUFBO0FBQ0MsOEJBQUMsU0FBRDtBQUNFLHVCQUFXLEtBQUtsQixLQUFMLENBQVdDLFNBRHhCO0FBRUUsOEJBQWtCLEtBQUtHO0FBRnpCLFlBREQ7QUFBQTtBQUFBLFNBREg7QUFPRCxPQVJELE1BUU8sSUFBSSxLQUFLSixLQUFMLENBQVdFLElBQVgsS0FBb0IsY0FBeEIsRUFBd0M7QUFDN0NnQixlQUFPLG9CQUFDLGFBQUQsSUFBZSxlQUFlLEtBQUtsQixLQUFMLENBQVdHLGFBQXpDLEdBQVA7QUFDRCxPQUZNLE1BRUEsSUFBSSxLQUFLSCxLQUFMLENBQVdFLElBQVgsS0FBb0IsYUFBeEIsRUFBdUM7QUFDNUNnQixlQUFPLG9CQUFDLGNBQUQsT0FBUDtBQUNEOztBQUVELGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsR0FBRCxJQUFLLG1CQUFtQixLQUFLWixpQkFBN0IsR0FERjtBQUVHWTtBQUZILE9BREY7QUFNRDs7OztFQS9EZUMsTUFBTUMsUzs7QUFtRXhCQyxPQUFPdkIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkhvbWVwYWdlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9QYXJlbnQgQXBwIHdpdGhpbiBob21lcGFnZS5odG1sXG4vL0FsbG93cyB1c2VycyB0byB2aWV3IGV2ZW50cywgY3JlYXRlIGFuZCB2aWV3IGV2ZW50IHBsYW5uaW5nIGRldGFpbHNcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXZlbnRMaXN0OiBudWxsLFxuICAgICAgcGFnZTogJ2hvbWVwYWdlJyxcbiAgICAgIGZlYXR1cmVkRXZlbnQ6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRW50cnlDbGljayA9IHRoaXMuaGFuZGxlRW50cnlDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ3JlYXRlQ2xpY2sgPSB0aGlzLmhhbmRsZUNyZWF0ZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9zZW5kcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdG8gcG9wdWxhdGUgdGhlIGV2ZW50TGlzdCBhcnJheSBpbiB0aGlzIGNvbXBvbmVudCdzIHN0YXRlLFxuICAgIC8vd2hpY2ggZ2V0cyBwYXNzZWQgYXMgYSBwcm9wIGludG8gdGhlIEV2ZW50bGlzdCBjb21wb25lbnRcbiAgICB2YXIgc3VjY2Vzc0hhbmRsZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50TGlzdDogZGF0YX0pO1xuICAgIH07XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvZXZlbnRUYWJsZScsXG4gICAgICBzdWNjZXNzOiBzdWNjZXNzSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFbnRyeUNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYWdlOiAnZXZlbnREZXRhaWxzJyxcbiAgICAgIGZlYXR1cmVkRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDcmVhdGVDbGljayhldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFnZTogJ2NyZWF0ZUV2ZW50J1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB2aWV3O1xuICAgIC8vdmlldyBsb2dpYzogaWYgYW4gZXZlbnQgaGFzIGJlZW4gY2xpY2tlZCBvbiwgdGhlbiB0aGUgcGFnZSBzaG91bGQgdmlldyBcbiAgICAvL3RoZSBldmVudERldGFpbHMgcGFnZS0tdGhlIEV2ZW50UGxhbm5pbmcgY29tcG9uZW50LiBPdGhlcndpc2UsIHNob3cgdGhlIFxuICAgIC8vaG9tZXBhZ2UtLXRoZSBFdmVudExpc3QgY29tcG9uZW50LlxuICAgIGlmICh0aGlzLnN0YXRlLnBhZ2UgPT09ICdob21lcGFnZScpIHtcbiAgICAgIHZpZXcgPSBcbiAgICAgICAgKDxkaXY+XG4gICAgICAgICAgPEV2ZW50TGlzdFxuICAgICAgICAgICAgZXZlbnREYXRhPXt0aGlzLnN0YXRlLmV2ZW50TGlzdH1cbiAgICAgICAgICAgIGhhbmRsZUVudHJ5Q2xpY2s9e3RoaXMuaGFuZGxlRW50cnlDbGlja31cbiAgICAgICAgICAvPjtcbiAgICAgICAgPC9kaXY+KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUucGFnZSA9PT0gJ2V2ZW50RGV0YWlscycpIHtcbiAgICAgIHZpZXcgPSA8RXZlbnRQbGFubmluZyBmZWF0dXJlZEV2ZW50PXt0aGlzLnN0YXRlLmZlYXR1cmVkRXZlbnR9Lz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnBhZ2UgPT09ICdjcmVhdGVFdmVudCcpIHtcbiAgICAgIHZpZXcgPSA8Q3JlYXRlRXZlbnRBcHAgLz5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiBoYW5kbGVDcmVhdGVDbGljaz17dGhpcy5oYW5kbGVDcmVhdGVDbGlja30vPlxuICAgICAgICB7dmlld31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==
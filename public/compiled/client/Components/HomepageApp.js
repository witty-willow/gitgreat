'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
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
    key: 'render',
    value: function render() {
      var view;
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
      }

      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        view
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0hvbWVwYWdlQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXZlbnRMaXN0IiwicGFnZSIsImZlYXR1cmVkRXZlbnQiLCJoYW5kbGVFbnRyeUNsaWNrIiwiYmluZCIsInN1Y2Nlc3NIYW5kbGVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwic3VjY2VzcyIsImV2ZW50IiwidmlldyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLElBREE7QUFFWEMsWUFBTSxVQUZLO0FBR1hDLHFCQUFlO0FBSEosS0FBYjtBQUtBLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQVBpQjtBQVFsQjs7Ozt3Q0FDbUI7QUFDbEIsVUFBSUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFTQyxJQUFULEVBQWU7QUFDbENDLGdCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQSxhQUFLRyxRQUFMLENBQWMsRUFBQ1QsV0FBV00sSUFBWixFQUFkO0FBQ0QsT0FIRDtBQUlBSSxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLGFBRkE7QUFHTEMsaUJBQVNULGVBQWVELElBQWYsQ0FBb0IsSUFBcEI7QUFISixPQUFQO0FBS0Q7OztxQ0FFZ0JXLEssRUFBTztBQUN0QixXQUFLTixRQUFMLENBQWM7QUFDWlIsY0FBTSxjQURNO0FBRVpDLHVCQUFlYTtBQUZILE9BQWQ7QUFJRDs7OzZCQUVRO0FBQ1AsVUFBSUMsSUFBSjtBQUNBLFVBQUksS0FBS2pCLEtBQUwsQ0FBV0UsSUFBWCxLQUFvQixVQUF4QixFQUFvQztBQUNsQ2UsZUFDRztBQUFBO0FBQUE7QUFDQyw4QkFBQyxTQUFEO0FBQ0UsdUJBQVcsS0FBS2pCLEtBQUwsQ0FBV0MsU0FEeEI7QUFFRSw4QkFBa0IsS0FBS0c7QUFGekIsWUFERDtBQUFBO0FBQUEsU0FESDtBQU9ELE9BUkQsTUFRTyxJQUFJLEtBQUtKLEtBQUwsQ0FBV0UsSUFBWCxLQUFvQixjQUF4QixFQUF3QztBQUM3Q2UsZUFBTyxvQkFBQyxhQUFELElBQWUsZUFBZSxLQUFLakIsS0FBTCxDQUFXRyxhQUF6QyxHQUFQO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxHQUFELE9BREY7QUFFR2M7QUFGSCxPQURGO0FBTUQ7Ozs7RUFqRGVDLE1BQU1DLFM7O0FBcUR4QkMsT0FBT3RCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJIb21lcGFnZUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBldmVudExpc3Q6IG51bGwsXG4gICAgICBwYWdlOiAnaG9tZXBhZ2UnLFxuICAgICAgZmVhdHVyZWRFdmVudDogbnVsbFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVFbnRyeUNsaWNrID0gdGhpcy5oYW5kbGVFbnRyeUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHN1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtldmVudExpc3Q6IGRhdGF9KTtcbiAgICB9O1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL2V2ZW50VGFibGUnLFxuICAgICAgc3VjY2Vzczogc3VjY2Vzc0hhbmRsZXIuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRW50cnlDbGljayhldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFnZTogJ2V2ZW50RGV0YWlscycsXG4gICAgICBmZWF0dXJlZEV2ZW50OiBldmVudFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB2aWV3O1xuICAgIGlmICh0aGlzLnN0YXRlLnBhZ2UgPT09ICdob21lcGFnZScpIHtcbiAgICAgIHZpZXcgPSBcbiAgICAgICAgKDxkaXY+XG4gICAgICAgICAgPEV2ZW50TGlzdFxuICAgICAgICAgICAgZXZlbnREYXRhPXt0aGlzLnN0YXRlLmV2ZW50TGlzdH1cbiAgICAgICAgICAgIGhhbmRsZUVudHJ5Q2xpY2s9e3RoaXMuaGFuZGxlRW50cnlDbGlja31cbiAgICAgICAgICAvPjtcbiAgICAgICAgPC9kaXY+KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUucGFnZSA9PT0gJ2V2ZW50RGV0YWlscycpIHtcbiAgICAgIHZpZXcgPSA8RXZlbnRQbGFubmluZyBmZWF0dXJlZEV2ZW50PXt0aGlzLnN0YXRlLmZlYXR1cmVkRXZlbnR9Lz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAge3ZpZXd9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxud2luZG93LkFwcCA9IEFwcDsiXX0=
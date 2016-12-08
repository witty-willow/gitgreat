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
      tab: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'changeDisplay',
    value: function changeDisplay() {
      console.log('hit');
      this.setState({
        tab: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'EVENT'
        ),
        React.createElement(
          'div',
          null,
          'Display Tab Below Stuff Here'
        ),
        this.state.tab ? React.createElement(WhatToBring, null) : null,
        React.createElement(FeatureNavigation, { changeDisplay: this.changeDisplay.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC9FdmVudFBsYW5uaW5nL2NsaWVudC9Db21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInRhYiIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImNoYW5nZURpc3BsYXkiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSztBQURNLEtBQWI7QUFGaUI7QUFLbEI7Ozs7b0NBRWU7QUFDZEMsY0FBUUMsR0FBUixDQUFZLEtBQVo7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDWkgsYUFBSztBQURPLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFBUTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRyxhQUFLRCxLQUFMLENBQVdDLEdBQVgsR0FBaUIsb0JBQUMsV0FBRCxPQUFqQixHQUFtQyxJQUh0QztBQUlFLDRCQUFDLGlCQUFELElBQW1CLGVBQWUsS0FBS0ksYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbEM7QUFKRixPQUFSO0FBTUQ7Ozs7RUF0QmVDLE1BQU1DLFM7O0FBd0J4QkMsT0FBT1gsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0YWI6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRGlzcGxheSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGl0Jyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWI6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgIDxoMT5FVkVOVDwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+RGlzcGxheSBUYWIgQmVsb3cgU3R1ZmYgSGVyZTwvZGl2PlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWIgPyA8V2hhdFRvQnJpbmcgLz4gOiBudWxsfVxuICAgICAgICAgICAgICA8RmVhdHVyZU5hdmlnYXRpb24gY2hhbmdlRGlzcGxheT17dGhpcy5jaGFuZ2VEaXNwbGF5LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICB9XG59XG53aW5kb3cuQXBwID0gQXBwO1xuXG4iXX0=
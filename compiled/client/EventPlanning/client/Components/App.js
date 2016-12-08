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
      tab: false
    };
    return _this;
  }

  _createClass(EventList, [{
    key: 'changeDisplay',
    value: function changeDisplay(e) {
      // console.log('hit');
      // console.log('e here:', e.target.value);
      this.setState({
        tab: e.target.value
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
        this.state.tab === 'whatToBringBtn' ? React.createElement(WhatToBring, null) : null,
        this.state.tab === 'activitiesBtn' ? React.createElement(Activities, null) : null,
        React.createElement(FeatureNavigation, { changeDisplay: this.changeDisplay.bind(this) })
      );
    }
  }]);

  return EventList;
}(React.Component);

window.EventList = EventList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC9FdmVudFBsYW5uaW5nL2NsaWVudC9Db21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiRXZlbnRMaXN0IiwicHJvcHMiLCJzdGF0ZSIsInRhYiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlRGlzcGxheSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSztBQURNLEtBQWI7QUFGaUI7QUFLbEI7Ozs7a0NBRWFDLEMsRUFBRztBQUNmO0FBQ0E7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDWkYsYUFBS0MsRUFBRUUsTUFBRixDQUFTQztBQURGLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFBUTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRyxhQUFLTCxLQUFMLENBQVdDLEdBQVgsS0FBbUIsZ0JBQW5CLEdBQXNDLG9CQUFDLFdBQUQsT0FBdEMsR0FBd0QsSUFIM0Q7QUFJRyxhQUFLRCxLQUFMLENBQVdDLEdBQVgsS0FBbUIsZUFBbkIsR0FBcUMsb0JBQUMsVUFBRCxPQUFyQyxHQUFzRCxJQUp6RDtBQUtFLDRCQUFDLGlCQUFELElBQW1CLGVBQWUsS0FBS0ssYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbEM7QUFMRixPQUFSO0FBT0Q7Ozs7RUF4QnFCQyxNQUFNQyxTOztBQTBCOUJDLE9BQU9aLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV2ZW50TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0YWI6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRGlzcGxheShlKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hpdCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdlIGhlcmU6JywgZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFiOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgPGgxPkVWRU5UPC9oMT5cbiAgICAgICAgICAgICAgPGRpdj5EaXNwbGF5IFRhYiBCZWxvdyBTdHVmZiBIZXJlPC9kaXY+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYiA9PT0gJ3doYXRUb0JyaW5nQnRuJyA/IDxXaGF0VG9CcmluZyAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYiA9PT0gJ2FjdGl2aXRpZXNCdG4nID8gPEFjdGl2aXRpZXMgLz4gOiBudWxsfVxuICAgICAgICAgICAgICA8RmVhdHVyZU5hdmlnYXRpb24gY2hhbmdlRGlzcGxheT17dGhpcy5jaGFuZ2VEaXNwbGF5LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICB9XG59XG53aW5kb3cuRXZlbnRMaXN0ID0gRXZlbnRMaXN0O1xuXG4iXX0=
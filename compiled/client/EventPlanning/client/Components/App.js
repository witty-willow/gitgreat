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

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC9FdmVudFBsYW5uaW5nL2NsaWVudC9Db21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInRhYiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlRGlzcGxheSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLO0FBRE0sS0FBYjtBQUZpQjtBQUtsQjs7OztrQ0FFYUMsQyxFQUFHO0FBQ2Y7QUFDQTtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixhQUFLQyxFQUFFRSxNQUFGLENBQVNDO0FBREYsT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxhQUFRO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRjtBQUdHLGFBQUtMLEtBQUwsQ0FBV0MsR0FBWCxLQUFtQixnQkFBbkIsR0FBc0Msb0JBQUMsV0FBRCxPQUF0QyxHQUF3RCxJQUgzRDtBQUlHLGFBQUtELEtBQUwsQ0FBV0MsR0FBWCxLQUFtQixlQUFuQixHQUFxQyxvQkFBQyxVQUFELE9BQXJDLEdBQXNELElBSnpEO0FBS0UsNEJBQUMsaUJBQUQsSUFBbUIsZUFBZSxLQUFLSyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFsQztBQUxGLE9BQVI7QUFPRDs7OztFQXhCZUMsTUFBTUMsUzs7QUEwQnhCQyxPQUFPWixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhYjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VEaXNwbGF5KGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaGl0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coJ2UgaGVyZTonLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWI6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgICAgICA8aDE+RVZFTlQ8L2gxPlxuICAgICAgICAgICAgICA8ZGl2PkRpc3BsYXkgVGFiIEJlbG93IFN0dWZmIEhlcmU8L2Rpdj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFiID09PSAnd2hhdFRvQnJpbmdCdG4nID8gPFdoYXRUb0JyaW5nIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFiID09PSAnYWN0aXZpdGllc0J0bicgPyA8QWN0aXZpdGllcyAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIDxGZWF0dXJlTmF2aWdhdGlvbiBjaGFuZ2VEaXNwbGF5PXt0aGlzLmNoYW5nZURpc3BsYXkuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgIDwvZGl2Pik7XG4gIH1cbn1cbndpbmRvdy5BcHAgPSBBcHA7XG5cbiJdfQ==
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventPlanning = function (_React$Component) {
  _inherits(EventPlanning, _React$Component);

  function EventPlanning(props) {
    _classCallCheck(this, EventPlanning);

    var _this = _possibleConstructorReturn(this, (EventPlanning.__proto__ || Object.getPrototypeOf(EventPlanning)).call(this, props));

    _this.state = {
      tab: false
    };
    return _this;
  }

  _createClass(EventPlanning, [{
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
      console.log(this.props.featuredEvent);
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
          'Display Event: ',
          this.props.featuredEvent.Name
        ),
        this.state.tab === 'whatToBringBtn' ? React.createElement(WhatToBring, null) : null,
        this.state.tab === 'activitiesBtn' ? React.createElement(Activities, null) : null,
        React.createElement(FeatureNavigation, { changeDisplay: this.changeDisplay.bind(this) })
      );
    }
  }]);

  return EventPlanning;
}(React.Component);

window.EventPlanning = EventPlanning;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50UGxhbm5pbmcuanN4Il0sIm5hbWVzIjpbIkV2ZW50UGxhbm5pbmciLCJwcm9wcyIsInN0YXRlIiwidGFiIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZmVhdHVyZWRFdmVudCIsIk5hbWUiLCJjaGFuZ2VEaXNwbGF5IiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGE7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLO0FBRE0sS0FBYjtBQUZpQjtBQUtsQjs7OztrQ0FFYUMsQyxFQUFHO0FBQ2Y7QUFDQTtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixhQUFLQyxFQUFFRSxNQUFGLENBQVNDO0FBREYsT0FBZDtBQUdEOzs7NkJBRVE7QUFDUEMsY0FBUUMsR0FBUixDQUFZLEtBQUtSLEtBQUwsQ0FBV1MsYUFBdkI7QUFDQSxhQUFRO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQXFCLGVBQUtULEtBQUwsQ0FBV1MsYUFBWCxDQUF5QkM7QUFBOUMsU0FGRjtBQUdHLGFBQUtULEtBQUwsQ0FBV0MsR0FBWCxLQUFtQixnQkFBbkIsR0FBc0Msb0JBQUMsV0FBRCxPQUF0QyxHQUF3RCxJQUgzRDtBQUlHLGFBQUtELEtBQUwsQ0FBV0MsR0FBWCxLQUFtQixlQUFuQixHQUFxQyxvQkFBQyxVQUFELE9BQXJDLEdBQXNELElBSnpEO0FBS0UsNEJBQUMsaUJBQUQsSUFBbUIsZUFBZSxLQUFLUyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFsQztBQUxGLE9BQVI7QUFPRDs7OztFQXpCeUJDLE1BQU1DLFM7O0FBMkJsQ0MsT0FBT2hCLGFBQVAsR0FBdUJBLGFBQXZCIiwiZmlsZSI6IkV2ZW50UGxhbm5pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudFBsYW5uaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhYjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VEaXNwbGF5KGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaGl0Jyk7XG4gICAgLy8gY29uc29sZS5sb2coJ2UgaGVyZTonLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWI6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50KTtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgIDxoMT5FVkVOVDwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+RGlzcGxheSBFdmVudDoge3RoaXMucHJvcHMuZmVhdHVyZWRFdmVudC5OYW1lfTwvZGl2PlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWIgPT09ICd3aGF0VG9CcmluZ0J0bicgPyA8V2hhdFRvQnJpbmcgLz4gOiBudWxsfVxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWIgPT09ICdhY3Rpdml0aWVzQnRuJyA/IDxBY3Rpdml0aWVzIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgPEZlYXR1cmVOYXZpZ2F0aW9uIGNoYW5nZURpc3BsYXk9e3RoaXMuY2hhbmdlRGlzcGxheS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgfVxufVxud2luZG93LkV2ZW50UGxhbm5pbmcgPSBFdmVudFBsYW5uaW5nO1xuXG4iXX0=
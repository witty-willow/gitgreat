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

    _this.changeDisplay = _this.changeDisplay.bind(_this);
    return _this;
  }

  _createClass(EventPlanning, [{
    key: 'changeDisplay',
    value: function changeDisplay(e) {
      this.setState({
        tab: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var view;
      if (this.state.tab === 'whatToBringBtn') {
        view = React.createElement(WhatToBring, { featuredEvent: this.props.featuredEvent });
      } else if (this.state.tab === 'activitiesBtn') {
        view = React.createElement(Activities, null);
      } else if (this.state.tab === 'reminderBtn') {
        view = React.createElement(Reminders, { featuredEvent: this.props.featuredEvent });
      }
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'eventHeader' },
          this.props.featuredEvent.name,
          ' | ',
          this.props.featuredEvent.where,
          ' | ',
          this.props.featuredEvent.when
        ),
        React.createElement(FeatureNavigation, { changeDisplay: this.changeDisplay }),
        view
      );
    }
  }]);

  return EventPlanning;
}(React.Component);

window.EventPlanning = EventPlanning;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50UGxhbm5pbmcuanN4Il0sIm5hbWVzIjpbIkV2ZW50UGxhbm5pbmciLCJwcm9wcyIsInN0YXRlIiwidGFiIiwiY2hhbmdlRGlzcGxheSIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZpZXciLCJmZWF0dXJlZEV2ZW50IiwibmFtZSIsIndoZXJlIiwid2hlbiIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGE7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLO0FBRE0sS0FBYjs7QUFJQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBTmlCO0FBT2xCOzs7O2tDQUVhQyxDLEVBQUc7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFDWkosYUFBS0csRUFBRUUsTUFBRixDQUFTQztBQURGLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsVUFBSUMsSUFBSjtBQUNBLFVBQUksS0FBS1IsS0FBTCxDQUFXQyxHQUFYLEtBQW1CLGdCQUF2QixFQUF5QztBQUN2Q08sZUFBTyxvQkFBQyxXQUFELElBQWEsZUFBZSxLQUFLVCxLQUFMLENBQVdVLGFBQXZDLEdBQVA7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLVCxLQUFMLENBQVdDLEdBQVgsS0FBbUIsZUFBdkIsRUFBd0M7QUFDN0NPLGVBQU8sb0JBQUMsVUFBRCxPQUFQO0FBQ0QsT0FGTSxNQUVBLElBQUksS0FBS1IsS0FBTCxDQUFXQyxHQUFYLEtBQW1CLGFBQXZCLEVBQXNDO0FBQzNDTyxlQUFPLG9CQUFDLFNBQUQsSUFBVyxlQUFlLEtBQUtULEtBQUwsQ0FBV1UsYUFBckMsR0FBUDtBQUNEO0FBQ0QsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLGFBQWQ7QUFBNkIsZUFBS1YsS0FBTCxDQUFXVSxhQUFYLENBQXlCQyxJQUF0RDtBQUFBO0FBQStELGVBQUtYLEtBQUwsQ0FBV1UsYUFBWCxDQUF5QkUsS0FBeEY7QUFBQTtBQUFrRyxlQUFLWixLQUFMLENBQVdVLGFBQVgsQ0FBeUJHO0FBQTNILFNBREY7QUFFRSw0QkFBQyxpQkFBRCxJQUFtQixlQUFlLEtBQUtWLGFBQXZDLEdBRkY7QUFHR007QUFISCxPQURGO0FBT0Q7Ozs7RUFoQ3lCSyxNQUFNQyxTOztBQWtDbENDLE9BQU9qQixhQUFQLEdBQXVCQSxhQUF2QiIsImZpbGUiOiJFdmVudFBsYW5uaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXZlbnRQbGFubmluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0YWI6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuY2hhbmdlRGlzcGxheSA9IHRoaXMuY2hhbmdlRGlzcGxheS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlRGlzcGxheShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWI6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHZpZXc7XG4gICAgaWYgKHRoaXMuc3RhdGUudGFiID09PSAnd2hhdFRvQnJpbmdCdG4nKSB7XG4gICAgICB2aWV3ID0gPFdoYXRUb0JyaW5nIGZlYXR1cmVkRXZlbnQ9e3RoaXMucHJvcHMuZmVhdHVyZWRFdmVudH0vPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudGFiID09PSAnYWN0aXZpdGllc0J0bicpIHtcbiAgICAgIHZpZXcgPSA8QWN0aXZpdGllcyAvPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudGFiID09PSAncmVtaW5kZXJCdG4nKSB7XG4gICAgICB2aWV3ID0gPFJlbWluZGVycyBmZWF0dXJlZEV2ZW50PXt0aGlzLnByb3BzLmZlYXR1cmVkRXZlbnR9Lz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZXZlbnRIZWFkZXJcIj57dGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50Lm5hbWV9IHwge3RoaXMucHJvcHMuZmVhdHVyZWRFdmVudC53aGVyZX0gfCB7dGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50LndoZW59PC9oMT5cbiAgICAgICAgPEZlYXR1cmVOYXZpZ2F0aW9uIGNoYW5nZURpc3BsYXk9e3RoaXMuY2hhbmdlRGlzcGxheX0gLz5cbiAgICAgICAge3ZpZXd9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuRXZlbnRQbGFubmluZyA9IEV2ZW50UGxhbm5pbmc7XG5cbiJdfQ==
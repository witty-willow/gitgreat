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
      } else if (this.state.tab === 'photosBtn') {
        view = React.createElement(Photos, { uploadFile: this.uploadFile });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50UGxhbm5pbmcuanN4Il0sIm5hbWVzIjpbIkV2ZW50UGxhbm5pbmciLCJwcm9wcyIsInN0YXRlIiwidGFiIiwiY2hhbmdlRGlzcGxheSIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZpZXciLCJmZWF0dXJlZEV2ZW50IiwidXBsb2FkRmlsZSIsIm5hbWUiLCJ3aGVyZSIsIndoZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSztBQURNLEtBQWI7O0FBSUEsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQixPQUFyQjtBQU5pQjtBQU9sQjs7OztrQ0FFYUMsQyxFQUFHO0FBQ2YsV0FBS0MsUUFBTCxDQUFjO0FBQ1pKLGFBQUtHLEVBQUVFLE1BQUYsQ0FBU0M7QUFERixPQUFkO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQUlDLElBQUo7QUFDQSxVQUFJLEtBQUtSLEtBQUwsQ0FBV0MsR0FBWCxLQUFtQixnQkFBdkIsRUFBeUM7QUFDdkNPLGVBQU8sb0JBQUMsV0FBRCxJQUFhLGVBQWUsS0FBS1QsS0FBTCxDQUFXVSxhQUF2QyxHQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBS1QsS0FBTCxDQUFXQyxHQUFYLEtBQW1CLGVBQXZCLEVBQXdDO0FBQzdDTyxlQUFPLG9CQUFDLFVBQUQsT0FBUDtBQUNELE9BRk0sTUFFQSxJQUFJLEtBQUtSLEtBQUwsQ0FBV0MsR0FBWCxLQUFtQixhQUF2QixFQUFzQztBQUMzQ08sZUFBTyxvQkFBQyxTQUFELElBQVcsZUFBZSxLQUFLVCxLQUFMLENBQVdVLGFBQXJDLEdBQVA7QUFDRCxPQUZNLE1BRUEsSUFBSSxLQUFLVCxLQUFMLENBQVdDLEdBQVgsS0FBbUIsV0FBdkIsRUFBb0M7QUFDMUNPLGVBQU8sb0JBQUMsTUFBRCxJQUFRLFlBQVksS0FBS0UsVUFBekIsR0FBUDtBQUNBO0FBQ0QsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLGFBQWQ7QUFBNkIsZUFBS1gsS0FBTCxDQUFXVSxhQUFYLENBQXlCRSxJQUF0RDtBQUFBO0FBQStELGVBQUtaLEtBQUwsQ0FBV1UsYUFBWCxDQUF5QkcsS0FBeEY7QUFBQTtBQUFrRyxlQUFLYixLQUFMLENBQVdVLGFBQVgsQ0FBeUJJO0FBQTNILFNBREY7QUFFRSw0QkFBQyxpQkFBRCxJQUFtQixlQUFlLEtBQUtYLGFBQXZDLEdBRkY7QUFHR007QUFISCxPQURGO0FBT0Q7Ozs7RUFsQ3lCTSxNQUFNQyxTOztBQW9DbENDLE9BQU9sQixhQUFQLEdBQXVCQSxhQUF2QiIsImZpbGUiOiJFdmVudFBsYW5uaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXZlbnRQbGFubmluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0YWI6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuY2hhbmdlRGlzcGxheSA9IHRoaXMuY2hhbmdlRGlzcGxheS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlRGlzcGxheShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWI6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHZpZXc7XG4gICAgaWYgKHRoaXMuc3RhdGUudGFiID09PSAnd2hhdFRvQnJpbmdCdG4nKSB7XG4gICAgICB2aWV3ID0gPFdoYXRUb0JyaW5nIGZlYXR1cmVkRXZlbnQ9e3RoaXMucHJvcHMuZmVhdHVyZWRFdmVudH0vPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudGFiID09PSAnYWN0aXZpdGllc0J0bicpIHtcbiAgICAgIHZpZXcgPSA8QWN0aXZpdGllcyAvPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudGFiID09PSAncmVtaW5kZXJCdG4nKSB7XG4gICAgICB2aWV3ID0gPFJlbWluZGVycyBmZWF0dXJlZEV2ZW50PXt0aGlzLnByb3BzLmZlYXR1cmVkRXZlbnR9Lz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRhYiA9PT0gJ3Bob3Rvc0J0bicpIHtcbiAgICAgdmlldyA9IDxQaG90b3MgdXBsb2FkRmlsZT17dGhpcy51cGxvYWRGaWxlfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJldmVudEhlYWRlclwiPnt0aGlzLnByb3BzLmZlYXR1cmVkRXZlbnQubmFtZX0gfCB7dGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50LndoZXJlfSB8IHt0aGlzLnByb3BzLmZlYXR1cmVkRXZlbnQud2hlbn08L2gxPlxuICAgICAgICA8RmVhdHVyZU5hdmlnYXRpb24gY2hhbmdlRGlzcGxheT17dGhpcy5jaGFuZ2VEaXNwbGF5fSAvPlxuICAgICAgICB7dmlld31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbndpbmRvdy5FdmVudFBsYW5uaW5nID0gRXZlbnRQbGFubmluZztcblxuIl19
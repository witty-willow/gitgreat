'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Child component contained within HomepageApp
//Contains the event planning navigation bar
var EventPlanning = function (_React$Component) {
  _inherits(EventPlanning, _React$Component);

  function EventPlanning(props) {
    _classCallCheck(this, EventPlanning);

    var _this = _possibleConstructorReturn(this, (EventPlanning.__proto__ || Object.getPrototypeOf(EventPlanning)).call(this, props));

    _this.state = {
      tab: false
    };

    _this.changeTabDisplay = _this.changeTabDisplay.bind(_this);
    return _this;
  }

  _createClass(EventPlanning, [{
    key: 'changeTabDisplay',
    value: function changeTabDisplay(e) {
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
        React.createElement(FeatureNavigation, { changeDisplay: this.changeTabDisplay }),
        view
      );
    }
  }]);

  return EventPlanning;
}(React.Component);

window.EventPlanning = EventPlanning;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50UGxhbm5pbmcuanN4Il0sIm5hbWVzIjpbIkV2ZW50UGxhbm5pbmciLCJwcm9wcyIsInN0YXRlIiwidGFiIiwiY2hhbmdlVGFiRGlzcGxheSIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZpZXciLCJmZWF0dXJlZEV2ZW50IiwidXBsb2FkRmlsZSIsIm5hbWUiLCJ3aGVyZSIsIndoZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFDTUEsYTs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUs7QUFETSxLQUFiOztBQUlBLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQU5pQjtBQU9sQjs7OztxQ0FFZ0JDLEMsRUFBRztBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFDWkosYUFBS0csRUFBRUUsTUFBRixDQUFTQztBQURGLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsVUFBSUMsSUFBSjtBQUNBLFVBQUksS0FBS1IsS0FBTCxDQUFXQyxHQUFYLEtBQW1CLGdCQUF2QixFQUF5QztBQUN2Q08sZUFBTyxvQkFBQyxXQUFELElBQWEsZUFBZSxLQUFLVCxLQUFMLENBQVdVLGFBQXZDLEdBQVA7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLVCxLQUFMLENBQVdDLEdBQVgsS0FBbUIsZUFBdkIsRUFBd0M7QUFDN0NPLGVBQU8sb0JBQUMsVUFBRCxPQUFQO0FBQ0QsT0FGTSxNQUVBLElBQUksS0FBS1IsS0FBTCxDQUFXQyxHQUFYLEtBQW1CLGFBQXZCLEVBQXNDO0FBQzNDTyxlQUFPLG9CQUFDLFNBQUQsSUFBVyxlQUFlLEtBQUtULEtBQUwsQ0FBV1UsYUFBckMsR0FBUDtBQUNELE9BRk0sTUFFQSxJQUFJLEtBQUtULEtBQUwsQ0FBV0MsR0FBWCxLQUFtQixXQUF2QixFQUFvQztBQUMxQ08sZUFBTyxvQkFBQyxNQUFELElBQVEsWUFBWSxLQUFLRSxVQUF6QixHQUFQO0FBQ0E7QUFDRCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsYUFBZDtBQUE2QixlQUFLWCxLQUFMLENBQVdVLGFBQVgsQ0FBeUJFLElBQXREO0FBQUE7QUFBK0QsZUFBS1osS0FBTCxDQUFXVSxhQUFYLENBQXlCRyxLQUF4RjtBQUFBO0FBQWtHLGVBQUtiLEtBQUwsQ0FBV1UsYUFBWCxDQUF5Qkk7QUFBM0gsU0FERjtBQUVFLDRCQUFDLGlCQUFELElBQW1CLGVBQWUsS0FBS1gsZ0JBQXZDLEdBRkY7QUFHR007QUFISCxPQURGO0FBT0Q7Ozs7RUFsQ3lCTSxNQUFNQyxTOztBQW9DbENDLE9BQU9sQixhQUFQLEdBQXVCQSxhQUF2QiIsImZpbGUiOiJFdmVudFBsYW5uaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9DaGlsZCBjb21wb25lbnQgY29udGFpbmVkIHdpdGhpbiBIb21lcGFnZUFwcFxuLy9Db250YWlucyB0aGUgZXZlbnQgcGxhbm5pbmcgbmF2aWdhdGlvbiBiYXJcbmNsYXNzIEV2ZW50UGxhbm5pbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGFiOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLmNoYW5nZVRhYkRpc3BsYXkgPSB0aGlzLmNoYW5nZVRhYkRpc3BsYXkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVRhYkRpc3BsYXkoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFiOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB2aWV3O1xuICAgIGlmICh0aGlzLnN0YXRlLnRhYiA9PT0gJ3doYXRUb0JyaW5nQnRuJykge1xuICAgICAgdmlldyA9IDxXaGF0VG9CcmluZyBmZWF0dXJlZEV2ZW50PXt0aGlzLnByb3BzLmZlYXR1cmVkRXZlbnR9Lz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRhYiA9PT0gJ2FjdGl2aXRpZXNCdG4nKSB7XG4gICAgICB2aWV3ID0gPEFjdGl2aXRpZXMgLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRhYiA9PT0gJ3JlbWluZGVyQnRuJykge1xuICAgICAgdmlldyA9IDxSZW1pbmRlcnMgZmVhdHVyZWRFdmVudD17dGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50fS8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50YWIgPT09ICdwaG90b3NCdG4nKSB7XG4gICAgIHZpZXcgPSA8UGhvdG9zIHVwbG9hZEZpbGU9e3RoaXMudXBsb2FkRmlsZX0gLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZXZlbnRIZWFkZXJcIj57dGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50Lm5hbWV9IHwge3RoaXMucHJvcHMuZmVhdHVyZWRFdmVudC53aGVyZX0gfCB7dGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50LndoZW59PC9oMT5cbiAgICAgICAgPEZlYXR1cmVOYXZpZ2F0aW9uIGNoYW5nZURpc3BsYXk9e3RoaXMuY2hhbmdlVGFiRGlzcGxheX0gLz5cbiAgICAgICAge3ZpZXd9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuRXZlbnRQbGFubmluZyA9IEV2ZW50UGxhbm5pbmc7XG5cbiJdfQ==
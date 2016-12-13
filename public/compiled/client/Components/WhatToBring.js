'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhatToBring = function (_React$Component) {
  _inherits(WhatToBring, _React$Component);

  function WhatToBring(props) {
    _classCallCheck(this, WhatToBring);

    var _this = _possibleConstructorReturn(this, (WhatToBring.__proto__ || Object.getPrototypeOf(WhatToBring)).call(this, props));

    _this.state = {
      itemList: [{ item: 'mashed potatoes', cost: '20', owner: 'Jenn' }],
      currentItem: null,
      currentOwner: null,
      currentCost: null
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleItemChange = _this.handleItemChange.bind(_this);
    _this.handleCostChange = _this.handleCostChange.bind(_this);
    _this.handleOwnerChange = _this.handleOwnerChange.bind(_this);
    _this.fetchItems = _this.fetchItems.bind(_this);
    return _this;
  }

  _createClass(WhatToBring, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchItems();
    }
  }, {
    key: 'fetchItems',
    value: function fetchItems() {
      var eventParam = this.props.featuredEvent.name.split(' ').join('_');
      var successHandler = function successHandler(data) {
        this.setState({ itemList: data });
      };
      $.ajax({
        method: 'GET',
        url: '/itemList?eventName=' + eventParam,
        success: successHandler.bind(this)
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var item = {
        item: this.state.currentItem,
        cost: this.state.currentCost,
        owner: this.state.currentOwner
      };
      var successHandler = function successHandler(data) {
        this.fetchItems();
      };
      var eventParam = this.props.featuredEvent.name.split(' ').join('_');
      $.ajax({
        method: 'POST',
        url: '/itemList?eventName=' + eventParam,
        data: JSON.stringify(item),
        contentType: 'application/json',
        success: successHandler.bind(this)
      });
      event.preventDefault();
    }
  }, {
    key: 'handleItemChange',
    value: function handleItemChange(event) {
      this.setState({
        currentItem: event.target.value
      });
    }
  }, {
    key: 'handleOwnerChange',
    value: function handleOwnerChange(event) {
      this.setState({
        currentOwner: event.target.value
      });
    }
  }, {
    key: 'handleCostChange',
    value: function handleCostChange(event) {
      this.setState({
        currentCost: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { className: 'bringForm', onSubmit: this.handleSubmit },
          React.createElement(
            'label',
            null,
            'Owner:',
            React.createElement('input', { type: 'text', name: 'owner',
              onChange: this.handleOwnerChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Item:',
            React.createElement('input', { type: 'text', name: 'item',
              onChange: this.handleItemChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Cost:',
            React.createElement('input', { type: 'text', name: 'cost',
              onChange: this.handleCostChange
            })
          ),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        ),
        React.createElement(
          'table',
          { className: 'bringTable' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'Owner'
              ),
              React.createElement(
                'th',
                null,
                'Item'
              ),
              React.createElement(
                'th',
                null,
                'Cost'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            this.state.itemList.map(function (item, index) {
              return React.createElement(
                'tr',
                { key: index },
                React.createElement(
                  'th',
                  null,
                  item.owner
                ),
                React.createElement(
                  'th',
                  null,
                  item.item
                ),
                React.createElement(
                  'th',
                  null,
                  item.cost
                )
              );
            })
          )
        )
      );
    }
  }]);

  return WhatToBring;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL1doYXRUb0JyaW5nLmpzeCJdLCJuYW1lcyI6WyJXaGF0VG9CcmluZyIsInByb3BzIiwic3RhdGUiLCJpdGVtTGlzdCIsIml0ZW0iLCJjb3N0Iiwib3duZXIiLCJjdXJyZW50SXRlbSIsImN1cnJlbnRPd25lciIsImN1cnJlbnRDb3N0IiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUl0ZW1DaGFuZ2UiLCJoYW5kbGVDb3N0Q2hhbmdlIiwiaGFuZGxlT3duZXJDaGFuZ2UiLCJmZXRjaEl0ZW1zIiwiZXZlbnRQYXJhbSIsImZlYXR1cmVkRXZlbnQiLCJuYW1lIiwic3BsaXQiLCJqb2luIiwic3VjY2Vzc0hhbmRsZXIiLCJkYXRhIiwic2V0U3RhdGUiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsInN1Y2Nlc3MiLCJldmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxDQUFDLEVBQUNDLE1BQU0saUJBQVAsRUFBMEJDLE1BQU0sSUFBaEMsRUFBc0NDLE9BQU8sTUFBN0MsRUFBRCxDQURDO0FBRVhDLG1CQUFhLElBRkY7QUFHWEMsb0JBQWMsSUFISDtBQUlYQyxtQkFBYTtBQUpGLEtBQWI7QUFNQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLE9BQXhCO0FBQ0EsVUFBS0UsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JGLElB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O0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFERixXQURGO0FBUUU7QUFBQTtBQUFBO0FBQ0csaUJBQUtYLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQmlDLEdBQXBCLENBQXlCLFVBQUNoQyxJQUFELEVBQU9pQyxLQUFQO0FBQUEscUJBQ3hCO0FBQUE7QUFBQSxrQkFBSSxLQUFLQSxLQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUtqQyx1QkFBS0U7QUFBVixpQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFLRix1QkFBS0E7QUFBVixpQkFGRjtBQUdFO0FBQUE7QUFBQTtBQUFLQSx1QkFBS0M7QUFBVjtBQUhGLGVBRHdCO0FBQUEsYUFBekI7QUFESDtBQVJGO0FBdEJGLE9BREY7QUEyQ0Q7Ozs7RUFqSHVCaUMsTUFBTUMsUyIsImZpbGUiOiJXaGF0VG9CcmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdoYXRUb0JyaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1MaXN0OiBbe2l0ZW06ICdtYXNoZWQgcG90YXRvZXMnLCBjb3N0OiAnMjAnLCBvd25lcjogJ0plbm4nfV0sXG4gICAgICBjdXJyZW50SXRlbTogbnVsbCxcbiAgICAgIGN1cnJlbnRPd25lcjogbnVsbCxcbiAgICAgIGN1cnJlbnRDb3N0OiBudWxsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVJdGVtQ2hhbmdlID0gdGhpcy5oYW5kbGVJdGVtQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDb3N0Q2hhbmdlID0gdGhpcy5oYW5kbGVDb3N0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVPd25lckNoYW5nZSA9IHRoaXMuaGFuZGxlT3duZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZldGNoSXRlbXMgPSB0aGlzLmZldGNoSXRlbXMuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoSXRlbXMoKTtcbiAgfVxuXG4gIGZldGNoSXRlbXMoKSB7XG4gICAgdmFyIGV2ZW50UGFyYW0gPSB0aGlzLnByb3BzLmZlYXR1cmVkRXZlbnQubmFtZS5zcGxpdCgnICcpLmpvaW4oJ18nKTtcbiAgICB2YXIgc3VjY2Vzc0hhbmRsZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpdGVtTGlzdDogZGF0YX0pO1xuICAgIH07XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvaXRlbUxpc3Q/ZXZlbnROYW1lPScgKyBldmVudFBhcmFtLFxuICAgICAgc3VjY2Vzczogc3VjY2Vzc0hhbmRsZXIuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgdmFyIGl0ZW0gPSB7XG4gICAgICBpdGVtOiB0aGlzLnN0YXRlLmN1cnJlbnRJdGVtLFxuICAgICAgY29zdDogdGhpcy5zdGF0ZS5jdXJyZW50Q29zdCxcbiAgICAgIG93bmVyOiB0aGlzLnN0YXRlLmN1cnJlbnRPd25lclxuICAgIH07XG4gICAgdmFyIHN1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy5mZXRjaEl0ZW1zKCk7XG4gICAgfTtcbiAgICB2YXIgZXZlbnRQYXJhbSA9IHRoaXMucHJvcHMuZmVhdHVyZWRFdmVudC5uYW1lLnNwbGl0KCcgJykuam9pbignXycpO1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJy9pdGVtTGlzdD9ldmVudE5hbWU9JyArIGV2ZW50UGFyYW0sXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShpdGVtKSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBzdWNjZXNzSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1DaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRJdGVtOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU93bmVyQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50T3duZXI6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ29zdENoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudENvc3Q6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJicmluZ0Zvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE93bmVyOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdvd25lcicgXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPd25lckNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgSXRlbTogXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0naXRlbScgXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUl0ZW1DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ29zdDogXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nY29zdCcgXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNvc3RDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJyaW5nVGFibGVcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5Pd25lcjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cbiAgICAgICAgICAgICAgPHRoPkNvc3Q8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1MaXN0Lm1hcCggKGl0ZW0sIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0aD57aXRlbS5vd25lcn08L3RoPlxuICAgICAgICAgICAgICAgIDx0aD57aXRlbS5pdGVtfTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPntpdGVtLmNvc3R9PC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=
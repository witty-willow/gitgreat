'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhatToBring = function (_React$Component) {
  _inherits(WhatToBring, _React$Component);

  function WhatToBring(props) {
    _classCallCheck(this, WhatToBring);

    return _possibleConstructorReturn(this, (WhatToBring.__proto__ || Object.getPrototypeOf(WhatToBring)).call(this, props));
  }

  _createClass(WhatToBring, [{
    key: 'fetchTable',
    value: function fetchTable() {
      console.log('hit fetchtable');
    }
  }, {
    key: 'render',
    value: function render() {
      this.fetchTable();
      return React.createElement(
        'div',
        null,
        'What To Bring Page Here',
        React.createElement(
          'table',
          null,
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'Item'
              ),
              React.createElement(
                'th',
                null,
                'Cost'
              ),
              React.createElement(
                'th',
                null,
                'Owner'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement('th', null)
            )
          )
        )
      );
    }
  }]);

  return WhatToBring;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC9FdmVudFBsYW5uaW5nL2NsaWVudC9Db21wb25lbnRzL1doYXRUb0JyaW5nLmpzeCJdLCJuYW1lcyI6WyJXaGF0VG9CcmluZyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImZldGNoVGFibGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFIQUNYQSxLQURXO0FBRWxCOzs7O2lDQUVZO0FBQ1hDLGNBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLQyxVQUFMO0FBQ0EsYUFBUTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQURGLFdBREY7QUFRRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQURGO0FBREY7QUFSRjtBQUZGLE9BQVI7QUFpQkQ7Ozs7RUE1QnVCQyxNQUFNQyxTIiwiZmlsZSI6IldoYXRUb0JyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV2hhdFRvQnJpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGZldGNoVGFibGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hpdCBmZXRjaHRhYmxlJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5mZXRjaFRhYmxlKCk7XG4gICAgcmV0dXJuICg8ZGl2PldoYXQgVG8gQnJpbmcgUGFnZSBIZXJlXG5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29zdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Pd25lcjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+e308L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+KVxuICB9XG59Il19
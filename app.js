'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterButton = function (_React$Component) {
    _inherits(CounterButton, _React$Component);

    function CounterButton(props) {
        _classCallCheck(this, CounterButton);

        var _this = _possibleConstructorReturn(this, (CounterButton.__proto__ || Object.getPrototypeOf(CounterButton)).call(this, props));

        _this.state = { counter: 0 };

        _this.incrementButton = _this.incrementButton.bind(_this);
        _this.decrementButton = _this.decrementButton.bind(_this);
        return _this;
    }

    _createClass(CounterButton, [{
        key: 'incrementButton',
        value: function incrementButton() {
            this.setState({
                counter: this.state.counter + 1
            });
        }
    }, {
        key: 'decrementButton',
        value: function decrementButton() {
            this.setState({
                counter: this.state.counter - 1
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
                    'Counter ',
                    this.state.counter
                ),
                React.createElement(
                    'button',
                    { onClick: this.incrementButton },
                    'Increment'
                ),
                React.createElement(
                    'button',
                    { onClick: this.decrementButton },
                    'Decrement'
                )
            );
        }
    }]);

    return CounterButton;
}(React.Component);

ReactDOM.render(React.createElement(CounterButton, null), document.getElementById('counter_button'));
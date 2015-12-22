/**
 * Created by steve on 15/09/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ValidationMixin = require('../ValidationMixin');

var _ValidationMixin2 = _interopRequireDefault(_ValidationMixin);

var DropDownMenu = require('material-ui/lib/drop-down-menu');
var SelectField = require('material-ui/lib/select-field');

var MuiSelect = (function (_React$Component) {
    _inherits(MuiSelect, _React$Component);

    function MuiSelect(props) {
        _classCallCheck(this, MuiSelect);

        _get(Object.getPrototypeOf(MuiSelect.prototype), 'constructor', this).call(this, props);
        this.onSelected = this.onSelected.bind(this);
        console.log("this.props.form.titleMap", this.props.form.titleMap);
        this.state = {
            currentValue: this.props.form.titleMap != null ? this.props.form.titleMap[0].value : ""
        };
    }

    _createClass(MuiSelect, [{
        key: 'onSelected',
        value: function onSelected(event, selectedIndex, menuItem) {
            this.setState({
                currentValue: menuItem.value
            });
            event.target.value = event.target.textContent;
            this.props.onChangeValidate(event);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(SelectField, {
                menuItems: this.props.form.titleMap,
                value: this.state.currentValue,
                displayMember: 'name',
                valueMember: 'value',
                floatingLabelText: this.props.form.title,
                onChange: this.onSelected,
                fullWidth: true });
        }
    }]);

    return MuiSelect;
})(_react2['default'].Component);

exports['default'] = (0, _ValidationMixin2['default'])(MuiSelect);
module.exports = exports['default'];
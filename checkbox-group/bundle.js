(function (ReactDOM,React$1) {
'use strict';

ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
React$1 = 'default' in React$1 ? React$1['default'] : React$1;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Checkbox = function (_React$Component) {
  inherits(Checkbox, _React$Component);

  function Checkbox() {
    classCallCheck(this, Checkbox);
    return possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _context$checkboxGrou = this.context.checkboxGroup,
          onChange = _context$checkboxGrou.onChange,
          name = _context$checkboxGrou.name,
          value = _context$checkboxGrou.value;


      var checked = !!value && value.includes(this.props.value);

      console.log(this.props.label + ": " + checked);
      return React$1.createElement(
        "label",
        { className: "checkbox" },
        React$1.createElement("input", {
          type: "checkbox",
          name: name,
          checked: checked,
          value: this.props.value,
          onChange: onChange
        }),
        React$1.createElement("i", null),
        React$1.createElement(
          "span",
          null,
          this.props.label
        )
      );
    }
  }]);
  return Checkbox;
}(React$1.Component);

Checkbox.contextTypes = {
  checkboxGroup: React$1.PropTypes.object
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

// currently only supports dot case

/**
 * Copied from lodash v4.17.4 2017-02-12
 *
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */

var CheckboxGroup = function (_React$Component) {
  inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    var _ref;

    classCallCheck(this, CheckboxGroup);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call.apply(_ref, [this, props].concat(args)));

    _this.name = props.name;

    _this.state = {
      dirty: false,
      value: props.value
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  createClass(CheckboxGroup, [{
    key: 'onChange',
    value: function onChange(e) {
      e.preventDefault();

      console.log(groupValue);
      if (document.activeElement !== e.target) return;

      var groupValue = this.state.value || [];
      var inputValue = +e.target.value || e.target.value;

      if (e.target.checked) {
        groupValue = groupValue.concat(inputValue);
      } else {
        groupValue = groupValue.filter(function (value) {
          return value !== inputValue;
        });
      }

      this.setState({
        value: groupValue.length ? groupValue : null
      });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        checkboxGroup: {
          value: this.state.value,
          name: this.props.name,
          onChange: this.onChange
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      var classes = Object.assign({
        'field-container': true,
        'checkbox-group': true,
        empty: !this.state.value,
        filled: this.state.value,
        invalid: this.state.error,
        touched: this.state.touched,
        valid: this.state.value && !this.state.error
      });

      return React$1.createElement(
        'div',
        { className: index(classes) },
        children,
        React$1.createElement('label', { className: 'icon' }),
        this.state.error && React$1.createElement(
          'label',
          { className: 'error' },
          this.state.error
        )
      );
    }
  }]);
  return CheckboxGroup;
}(React$1.Component);

CheckboxGroup.childContextTypes = {
  checkboxGroup: React$1.PropTypes.object
};

ReactDOM.render(React.createElement(
  'form',
  null,
  React.createElement(
    CheckboxGroup,
    { name: 'group01' },
    React.createElement(Checkbox, { value: 'one', label: 'One' }),
    React.createElement(Checkbox, { value: 'two', label: 'Two' }),
    React.createElement(Checkbox, { value: 'three', label: 'Three' }),
    React.createElement(Checkbox, { value: 'four', label: 'Four' })
  )
), document.getElementById('__mount'));

}(ReactDOM,React));

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontResizer = _react2.default.createClass({
	displayName: 'FontResizer',


	componentDidMount: function componentDidMount() {
		this.innerEl = this.el.children[0];
		this.maxFontSize = parseFloat(getComputedStyle(this.el).fontSize);
		window.addEventListener('resize', this.resize);
		this.resize();
	},

	componentDidUpdate: function componentDidUpdate() {
		this.resize();
	},

	resize: function resize() {
		var fontSize = parseFloat(getComputedStyle(this.innerEl).fontSize);
		resizeTextToFit(this.innerEl, this.el, fontSize, this.maxFontSize);
	},

	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			'div',
			{ className: 'font-resizer',
				ref: function ref(el) {
					return _this.el = el;
				},
				style: { whiteSpace: 'nowrap' } },
			this.props.children
		);
	}
});

function resizeTextToFit(innerEl, outerEl, fontSize, maxFontSize) {
	var overflow = innerEl.scrollWidth - outerEl.offsetWidth;

	if (overflow > 0) {
		var newFontSize = fontSize - .1;
		innerEl.style.fontSize = newFontSize + 'px';

		if (innerEl.scrollWidth - outerEl.offsetWidth > 0) {
			resizeTextToFit(innerEl, outerEl, newFontSize, maxFontSize);
		}
	} else if (overflow < 0) {
		var _newFontSize = fontSize + .1;
		if (_newFontSize > maxFontSize) return;
		innerEl.style.fontSize = _newFontSize + 'px';
		resizeTextToFit(innerEl, outerEl, _newFontSize, maxFontSize);
	}
}

exports.default = FontResizer;
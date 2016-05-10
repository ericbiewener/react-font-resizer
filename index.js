var React = require('react');


var FontResizer = React.createClass({

	componentDidMount: function() {
		this.innerEl = this.el.children[0]
		this.maxFontSize = parseFloat(getComputedStyle(this.el).fontSize)
		window.addEventListener('resize', this.resize);
	},

	componentDidUpdate: function() {
		this.resize()
	},

	resize: function() {
		var fontSize = parseFloat(getComputedStyle(this.innerEl).fontSize)
		resizeTextToFit(this.innerEl, this.el, fontSize, this.maxFontSize)
	},

	render: function() {
		return 	<div className='font-size-adapter' ref={el => this.el = el}>
					{this.props.children}
				</div>
	}
})

function resizeTextToFit(innerEl, outerEl, fontSize, maxFontSize) {
	var overflow = innerEl.scrollWidth - outerEl.offsetWidth

	if (overflow > 0) {
		var newFontSize = fontSize - .1
		innerEl.style.fontSize = `${newFontSize}px`

		if (innerEl.scrollWidth - outerEl.offsetWidth > 0) {
			resizeTextToFit(innerEl, outerEl, newFontSize, maxFontSize)
		}
	}
	else if (overflow < 0) {
		var newFontSize = fontSize + .1
		if (newFontSize > maxFontSize) return
		innerEl.style.fontSize = `${newFontSize}px`
		resizeTextToFit(innerEl, outerEl, newFontSize, maxFontSize)
	}
}

module.exports = FontResizer;
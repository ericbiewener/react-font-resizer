import React from 'react'
import {render} from 'react-dom'
import FontResizer from '../src/index.js'


const MyStatefulComponent = React.createClass({
	getInitialState: function() {
		return { text: 'Start typing in the input below' }
	},

	onChange: function(e) {
		this.setState({ text: e.target.value })
	},

	render: function() {
		return 	<div>
					<FontResizer>
						<div>{this.state.text}</div>
					</FontResizer>
					<textarea onChange={this.onChange}>Type here</textarea>
				</div>
	}
})

render(
	<MyStatefulComponent />,
	document.getElementById('root')
)
import React, { Component } from 'react';
import './GetQuoteButton.css';

class GetQuoteButton extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hover: false
		}
	}

	onMouseOver = () => {
		this.setState({
			hover: true
		})
	}

	onMouseOut = () => {
		this.setState({
			hover: false
		})
	}

	render() {
		return (
			<button
				onMouseOver={() => this.onMouseOver()}
				onMouseOut={() => this.onMouseOut()}
				style={{ backgroundColor: this.state.hover ? this.props.color : "white", color: this.state.hover ? 'white' : this.props.color }}
				onClick={this.props.changeQuote}
				className="GetQuoteButton"
			>
				Change Quote
			</button>
		)
	}
}

export default GetQuoteButton;
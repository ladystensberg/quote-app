import React, { Component } from 'react';

class SignUpButton extends Component {
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
				className="SignUpButton"
			>
				Signup
			</button>
		)
	}
}

export default SignUpButton;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
			<Link to="/signup"
				onMouseOver={() => this.onMouseOver()}
				onMouseOut={() => this.onMouseOut()}
				style={{ backgroundColor: this.state.hover ? this.props.color : "white", color: this.state.hover ? 'white' : this.props.color }}
				className="SignupButton ButtonLinks">
				Signup
			</Link>
		)
	}
}

export default SignUpButton;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginButton extends Component {
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
			<Link to="/login"
				onMouseOver={() => this.onMouseOver()}
				onMouseOut={() => this.onMouseOut()}
				style={{ backgroundColor: this.state.hover ? this.props.color : "white", color: this.state.hover ? 'white' : this.props.color }}
				className="LoginButton ButtonLinks">
				Login
			</Link>
		)
	}
}

export default LoginButton;
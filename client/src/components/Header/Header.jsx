import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LoginButton from '../LoginButton/LoginButton';
import SignUpButton from '../SignUpButton/SignUpButton';

const Header = (props) => (
	<header className="Header">
		<h1 className="Heading"><Link to="/">Random Quote</Link></h1>
		<LoginButton color={props.color} />
		<SignUpButton color={props.color} />
	</header>
)

export default Header;
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => (
	<div className="Login" style={{ backgroundColor: props.color }}>
		<div className="Main">
			{/* form goes here */}
			<LoginForm />
		</div>
	</div>
)

export default LoginPage;
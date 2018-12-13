import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

const LoginPage = (props) => (
	<div className="Signup" style={{ backgroundColor: props.color }}>
		<div className="Main">
			{/* form goes here */}
			<SignupForm />
		</div>
	</div>
)

export default LoginPage;
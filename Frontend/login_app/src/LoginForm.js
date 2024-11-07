import React, { useRef } from "react";
import './LoginForm.css';

const LoginForm = (props) => {
	const name = useRef('');
	const password = useRef('');

	const handleSubmit = (event) =>{
		event.preventDefault();

		props.onSubmit({
			login: name.current.value,
			password: password.current.value,
		});
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input ref={name} onChange={(e) => name.current.value = e.target.value} type="text" id="name" />
			<label htmlFor="password">Password</label>
			<input ref={password} onChange={(e) => password.current.value = e.target.value}type="password" id="password" />
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	)
}

export default LoginForm;
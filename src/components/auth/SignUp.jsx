import React from 'react';
import { Auth } from 'aws-amplify'
import { Redirect } from 'react-router-dom'

export default class SignUp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			confirmedPassword: "",
			error: null
		}
	}

	
	
	handleSubmit = async (evt) => {
		evt.preventDefault();
		const {username, email, password } = this.state;
		try{
			const signUpResp = await Auth.signUp({
				username,
				password,
				attributes: {
					email: email
				}
			});
			console.log(signUpResp)
			return <Redirect to='/user/dashboard' />
		}catch(error){
			let err = null;
			error.message ? err = error : err = { "message": error};
			this.setState({
				errors: err
			});
		}

	}

	handleChange = evt => {
		this.setState({
			[evt.target.id] : evt.target.value
		});
	}

	render(){
		return(
			<section className="signup-form">
				{this.state.error ? <p>{this.state.errors.message}</p> : <div/>}
				<h2>Register</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="field">
						<input 
							className="input" 
							type="text"
							id="username"
							placeholder="Enter username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field">
						<input 
							className="input" 
							type="email"
							id="email"
							placeholder="Enter email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field">
						<input 
							className="input" 
							type="password"
							id="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field">
						<input 
							className="input" 
							type="password"
							id="confirmPassword"
							placeholder="Confirm password"
							value={this.state.confirmPassword}
							onChange={this.handleChange}
						/>
					</div>
					<button>Register</button>
				</form>
			</section>
		)
	}
}
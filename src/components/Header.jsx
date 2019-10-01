import React from 'react'

export default class Header extends React.Component{
	render(){
		return(
			<header>
				<nav>
					<div className="nav-container">
						<a href="/">News Feed</a>
						<a href="user/dashboard">Dashboard</a>
					</div>
					<div className="sign-in-buttons">
						<button>Sign Up</button>
						<button>Login</button>
					</div>
				</nav>
				<h1> Zombie Watch </h1>
			</header>
		)
	}
}
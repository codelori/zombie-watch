import React from 'react'

export default class Header extends React.Component{
	render(){
		return(
			<header>
				<nav>
					<div className="nav-container">
						<a href="/">News Feed</a>
					</div>
					<div className="sign-in-buttons">
						<button onClick={evt=>this.props.handleCreatePost(evt)}>Create Post</button>
					</div>
				</nav>
				<h1> Zombie Watch </h1>
			</header>
		)
	}
}
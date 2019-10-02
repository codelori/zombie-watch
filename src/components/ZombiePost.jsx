import React from 'react';

export default class ZombiePost extends React.Component{
	render(){
		return(
			<div key={this.props.id} className="zombie-post">
				<div className="post-heading">
					<h2>{this.props.title}</h2>
					<h3>{this.props.date}</h3>
				</div>
				<img src={this.props.image} />
				<p>{this.props.message}</p>
				<h4>{this.props.location}</h4>
				<button onClick={event => this.props.deletePost(this.props.id, event)}>X</button>
				<button onClick={()=> this.props.handleEditPost(this.props.post)}>Edit</button>
			</div>
		)
	}
}
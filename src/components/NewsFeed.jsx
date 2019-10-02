import React from 'react'
import { displayAllPosts, deletePost } from '../services/api-helper'
import ZombiePost from './ZombiePost'

export default class NewsFeed extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}


	render(){
		return(
			<div className="news-feed">
				<h3>Zombie Sightings</h3>
				{this.props.posts.map(post => <ZombiePost key={post.id} title={post.title} 
						id={post.id}
						post={post}
						image={post.image}
						location={post.location}
						message={post.message}
						date={post.date}
						deletePost={this.props.handleDeletePost}
						handleEditPost={this.props.handleEditPost}
						/>)
				}
			</div>
		)
	}
}
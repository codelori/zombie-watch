import React from 'react'
import { displayAllPosts } from '../services/api-helper'
import ZombiePost from './ZombiePost'

export default class NewsFeed extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	componentDidMount = () => {
		this.fetchAllPosts();
	}

	fetchAllPosts = async () => {
		const posts = await displayAllPosts();
		console.log(posts)
		this.setState({posts: posts});
	}

	renderAllposts = async () => {
		const { posts } = this.state;
		if (posts.length > 1) {
			return posts.map( post => {
				return (
					<ZombiePost title={post.title} 
					image={post.imgae}
					location={post.location}
					message={post.message}
					date={post.date}
					/>
				);
			});
		} else {
			return(
				<h1>No zombie sightings...yet.</h1>
			)
		}

	}

	render(){
		return(
			<div className="news-feed">
				<h3>Zombie Sightings</h3>
				{ 
					this.state.posts && this.state.posts.length > 0
					? this.state.posts.map(post => <ZombiePost key={post.id} title={post.title} 
						id={post.id}
						image={post.image}
						location={post.location}
						message={post.message}
						date={post.date}
						/>)
					: <div className="tile notification is-warning">No Zombie Watch posts available</div>
				}
			</div>
		)
	}
}
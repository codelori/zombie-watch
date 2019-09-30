import React from 'react'
import { displayAllPosts } from '../services/api-helper'

export default class NewsFeed extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
	}

	componentDidMount = () => {
		this.fetchAllPosts()
	}

	fetchAllPosts = async () => {
		const posts = await displayAllPosts();
		this.setState({posts: posts})
	}

	render(){
		return(
			<section className="news-feed">
				<h3>Zombie Sightings</h3>
			</section>
		)
	}
}
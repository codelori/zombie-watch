import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

//import components
import Header from './components/Header'
import NewsFeed from './components/NewsFeed'
import Dashboard from './components/Dashboard'

import { displayAllPosts, deletePost, updatePost } from './services/api-helper'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      createPost: false,
      maxID: null,
      posts: [],
      post: {},
      editPost: false
    }
    
  }
  componentDidMount = () => {
		this.fetchAllPosts();
	}

	fetchAllPosts = async () => {
		const posts = await displayAllPosts();
    console.log(posts)
    await this.calculateId(posts)
		this.setState({posts: posts});
	}

	handleDeletePost = async (id, event) => {
    event.preventDefault();
    try {
			const deleteREsp = await deletePost(id);
			console.log("Tried to delete: " , deleteREsp)
			await this.fetchAllPosts();
		}catch(e){
			console.log(e)
		}
  } 

  calculateId = (posts) => {
    const ids = posts.map( post => parseInt(post.id))
    const maxID = ids.reduce((a,b)=> Math.max(a,b))
    console.log("ids", ids)
    console.log("Max ID", maxID)
    this.setState({
      maxID
    })
  }

  handleCreatePost = (evt) => {
    evt.preventDefault();
    if(this.state.createPost){
      this.setState({
        createPost: false
      })
    }else{
      this.setState({ createPost : true })
    }
  }

  handleEditPost = (post) => {
    this.setState({
      editPost: true,
      post: post
    })
  }

  onEditFormChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState(prevState =>{
      let newPost = prevState.post
      newPost[name] = value
      console.log("EDITED POST: ", newPost)
      return newPost
    })
  }

  onEditFormSubmit = async (event) => {
    event.preventDefault()
    const { post } = this.state
    const resp = await updatePost(post.id, post)
    console.log("UPDATE ATTEMPT", resp)
    this.setState({
      editPost: false
    })
  }

  render(){
    return (
      <div className="App">
        <Header handleCreatePost={this.handleCreatePost}/>
        <Dashboard 
          editPost={this.state.editPost}
          post={this.state.post}
          onEditFormChange={this.onEditFormChange}
          onEditFormSubmit={this.onEditFormSubmit}
          createPost={this.state.createPost} 
          handleCreatePost={this.handleCreatePost} 
          maxID={this.state.maxID}
        />
        {this.state.posts && this.state.posts.length>0 ? 
          <NewsFeed 
            posts={this.state.posts} 
            handleDeletePost={this.handleDeletePost}
            handleEditPost={this.handleEditPost}
          /> 
          : <div/>}
      </div>
    );
  }
}

export default App;

import React from 'react'
import {Redirect} from 'react-router-dom'
import { addPost } from '../services/api-helper'

export default class NewPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      title: '',
      message: '',
      image: '',
      location: '',
      date: ''
    }
  }

  onFormSubmit = async (evt) => {
    evt.preventDefault()
    try{
      let id = this.props.maxID + 1
      let params = {
        id: id.toString(),
        title: this.state.title,
        message: this.state.message,
        image: this.state.image,
        postLocation: this.state.location,
        postDate: this.state.date
      }
      await addPost(params.id, params)
      this.props.handleCreatePost(evt)
    }catch(err){
      console.log(`Girl, you need to fix this: ${err}`)
    }
    
  }

  onFormChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState({[name] : value})
  }

  render(){
    return(
      <div className = 'new-form-ctn'>
      <form onSubmit={this.onFormSubmit}>
          <h2>Add Zombie Watch Sighting</h2>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={this.onFormChange}
            />
          </div>
          <div>
            <label htmlFor="message">Description</label>
            <textarea
              id="message"
              name="message"
              onChange={this.onFormChange}
            />
          </div>
          <div>
            <label htmlFor="image">Photo</label>
            <input
              id="image"
              type="text"
              name="image"
              onChange={this.onFormChange}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              name="location"
              onChange={this.onFormChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              onChange={this.onFormChange}
            />
          </div>
          <div>
            <button>Add</button>
          </div>
        </form>
        <button>X</button>
      </div>
    )
  }
}
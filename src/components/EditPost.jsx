import React from 'react';

export default class EditPost extends React.Component{
  render(){
    return(
      <div>
        <form onSubmit={this.props.onEditFormSubmit}>
          <h2>Edit Zombie Sighting</h2>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              defaultValue={this.props.post.title}
              onChange={this.props.onEditFormChange}
            />
          </div>
          <div>
            <label htmlFor="message">Description</label>
            <textarea
              id="message"
              name="message"
              defaultValue={this.props.post.message}
              onChange={this.props.onEditFormChange}
            />
          </div>
          <div>
            <label htmlFor="image">Photo</label>
            <input
              id="image"
              type="text"
              name="image"
              defaultValue={this.props.post.image}
              onChange={this.props.onEditFormChange}
            />
          </div>
          <div>
            <label htmlFor="postLocation">Location</label>
            <input
              id="postLocation"
              type="text"
              name="postLocation"
              defaultValue={this.props.post.postLocation}
              onChange={this.props.onEditFormChange}
            />
          </div>
          <div>
            <label htmlFor="postDate">Date</label>
            <input
              id="postDate"
              type="date"
              name="postDate"
              defaultValue={this.props.post.postDate}
              onChange={this.props.onEditFormChange}
            />
          </div>
          <div>
            <button>Submit Update</button>
          </div>
        </form>
      </div>
    )
  }
}
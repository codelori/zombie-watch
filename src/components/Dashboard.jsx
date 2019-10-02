import React from 'react'
import NewPost from './NewPost'
import EditPost from './EditPost'

export default class Dashboard extends React.Component{
	render(){
		return(
			<section className='dashboard'>
				<h1>Welcome back, Zombie Watcher!</h1>
				{
					this.props.createPost? 
					<NewPost 
						handleCreatePost={this.props.handleCreatePost} 
						maxID={this.props.maxID}/> 
						: <div/>
				}
				{
					this.props.editPost? 
						<EditPost 
							post={this.props.post}
							onEditFormChange={this.props.onEditFormChange}
							onEditFormSubmit={this.props.onEditFormSubmit}/> 
						: <div/>
				}
			</section>
		)
	}
}
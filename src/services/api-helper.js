import axios from 'axios'
const URL = "https://0on9plr67a.execute-api.us-east-1.amazonaws.com/prod"

const zombiePostAPI = axios.create({
    baseURL: `${URL}/posts`
})

export const displayAllPosts = async () => {
	try{
		const posts = await zombiePostAPI.get("/")
		return posts.data
	}catch (err){
		console.log(`Could not retrieve all posts: ${err}`)
	}
}

export const deletePost = async (id) => {
	try{
		const resp = await zombiePostAPI.delete(`/${id}`)
		console.log("RESP ", resp)
		return resp
	}catch(err){
		console.log(`Could not delete posts: ${err}`)
	}
}

export const updatePost = async (id, params) => {
	try{
		const resp = await zombiePostAPI.patch(`/${id}`, params)
		return resp.body
	}catch(err){
		console.log(`Could not update post: ${err}`)
	}
}

export const addPost = async (id, params) => {
	try{
		const resp = await zombiePostAPI.post(`/${id}`, params)
		console.log(resp)
		return resp.body
	}catch(err){
		console.log(`Could not add post: ${err}`)
	}
}

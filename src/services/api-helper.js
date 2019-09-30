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
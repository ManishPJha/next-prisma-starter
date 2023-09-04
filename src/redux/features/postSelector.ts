import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	post: null,
	posts: [],
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setPost: (state, action) => {
			state.post = action.payload
			return state
		},
		setPosts: (state, action) => {
			state.posts = action.payload
			return state
		},
		resetPost: (state) => {
			state.post = null
			return state
		},
		resetPosts: (state) => {
			state.posts.length = 0
			return state
		},
	},
})

export const { setPost, setPosts, resetPost, resetPosts } = postSlice.actions

export default postSlice

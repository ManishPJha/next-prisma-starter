import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: null,
	users: [],
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
			return state
		},
		setUsers: (state, action) => {
			state.users = action.payload
			return state
		},
		resetUser: (state) => {
			state.user = null
			return state
		},
		resetUsers: (state) => {
			state.users.length = 0
			return state
		},
	},
})

export const { setUser, setUsers, resetUser, resetUsers } = userSlice.actions

export default userSlice

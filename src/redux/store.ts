import { configureStore } from '@reduxjs/toolkit'

import { user, post } from '@/redux/features'
import { userApi } from '@/redux/api'
import config from '@/config/default'

const reducer = {
	[user.name]: user.reducer,
	[post.name]: post.reducer,
	[userApi.reducerPath]: userApi.reducer,
}

/**
 *
 * @returns redux toolkit store
 */
const createStore = () =>
	configureStore({
		reducer,
		devTools: !config.isProduction,
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware({
				serializableCheck: false,
			}).concat(userApi.middleware)
		},
	})

const store = createStore()

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

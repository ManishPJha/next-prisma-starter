import {
	createApi,
	BaseQueryFn,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: '/api',
	prepareHeaders: (headers) => {
		const token = localStorage.getItem('token') as string
		if (token) {
			headers.set('Authorization', token)
		}
	},
})

const userApi = createApi({
	baseQuery,
	endpoints: (build) => ({
		getPosts: build.query<any, void>({
			query: () => '/user',
			transformResponse: (res: any) => res.data,
		}),
	}),
})

export const { useGetPostsQuery, useLazyGetPostsQuery } = userApi

export default userApi

import React, { useEffect } from 'react'

import { useGetPostsQuery } from '@/redux/api/userApi'

const user = () => {
	const { isLoading, isFetching, error, data } = useGetPostsQuery()

	useEffect(() => {
		if (!isLoading && error) {
			console.error(`>>> ERROR:`, error)
		}
		if (!isLoading && data) {
			console.log(`>>> data`, data)
		}
	}, [isLoading, error, data])

	if (isLoading || isFetching) return <span>Loading...</span>

	return <div>user</div>
}

export default user

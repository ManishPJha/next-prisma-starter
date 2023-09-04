import React, { useEffect } from 'react'

import { useGetUsersQuery } from '@/redux/api/userApi'

const User = () => {
	const { isLoading, isFetching, error, data } = useGetUsersQuery()

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

export default User

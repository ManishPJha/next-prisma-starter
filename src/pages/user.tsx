import React, { useEffect } from 'react'

import { useGetUsersQuery } from '@/redux/api/userApi'
import { useReduxActions } from '@/hooks/useReduxActions'

const User = () => {
	const { isLoading, isFetching, error, data } = useGetUsersQuery()

	const dispatch = useReduxActions()

	useEffect(() => {
		if (!isLoading && error) {
			console.error(`>>> ERROR:`, error)
		}
		if (!isLoading && data) {
			dispatch.setUsers(data)
		}
	}, [dispatch, isLoading, error, data])

	if (isLoading || isFetching) return <span>Loading...</span>

	return <div>user</div>
}

export default User

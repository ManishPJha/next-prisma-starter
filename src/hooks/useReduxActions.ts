import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { AppState, AppDispatch } from '@/redux/store'

import { user } from '@/redux/features'

export const useReduxActions = () => {
	const disaptch = useDispatch<AppDispatch>()

	return bindActionCreators(
		{
			...user.actions,
		},
		disaptch
	)
}

export const useReduxState = <T>(selector: (state: AppState) => T) => {
	return useSelector(selector)
}

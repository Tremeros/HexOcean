import * as actionTypes from '../../constans/actionTypes'
import * as requestTypes from '../../constans/requestTypes'
import { getDomainAdress } from '../../utils'
import { setRequestInProcess } from '../request'
import axios from 'axios'

export const addRecepie = (formData) => async (dispatch, getState) => {
	const requestType = requestTypes.ADD_RECEPIE_REQUEST
	const url = getDomainAdress()
	const requestInProcess = getState().request[requestType]

	if (requestInProcess) {
		return
	}

	dispatch(setRequestInProcess(true, requestType))

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	try {
		const res = await axios.post(`${url}/dishes`, formData, config)

		dispatch({
			type: actionTypes.ADD_RECEPIE,
			payload: 'Success!',
		})

		dispatch(setRequestInProcess(false, requestType))
	} catch (error) {
		dispatch({
			type: actionTypes.ADD_RECEPIE_ERROR,
			payload: 'Something went wrong',
		})
		dispatch(setRequestInProcess(false, requestType))
	}
}

export function setDishType(dishType) {
	return {
		type: actionTypes.SET_DISH_TYPE,
		payload: dishType,
	}
}

export function setValidationErrors(errors) {
	return {
		type: actionTypes.SET_VALIDATION_ERRORS,
		payload: errors,
	}
}

import * as requestTypes from '../../constans/requestTypes'

const initialState = {
	requestType: '',
	inProcess: false,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case requestTypes.SET_REQUEST_IN_PROCESS:
			return {
				...state,
				requestType: action.requestType,
				inProcess: action.inProcess,
			}
		default:
			return state
	}
}

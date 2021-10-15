import * as requestTypes from '../../constans/requestTypes'

export function setRequestInProcess(inProcess, requestType) {
	return {
		type: requestTypes.SET_REQUEST_IN_PROCESS,
		requestType,
		inProcess,
	}
}

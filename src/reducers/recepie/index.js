import * as actionTypes from '../../constans/actionTypes'

const INITIAL_STATE = {
	success: '',
	dishType: '',
	validationErrors: {},
	error: '',
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case actionTypes.ADD_RECEPIE:
			return { ...state, success: action.payload }
		case actionTypes.ADD_RECEPIE_ERROR:
			return { ...state, error: action.payload }
		case actionTypes.SET_DISH_TYPE:
			return { ...state, dishType: action.payload }
		case actionTypes.SET_VALIDATION_ERRORS:
			return { ...state, validationErrors: action.payload }
		default:
			return state
	}
}

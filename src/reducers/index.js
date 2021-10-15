import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import recepie from './recepie'
import request from './request'

export default combineReducers({
	recepie,
	request,
	form: formReducer,
})

import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(reduxThunk))
)

export default store

import { combineReducers } from 'redux'

import basketReducer from './basketReducer'
import authReducer from './authReducer'


const rootReducer = combineReducers({
	basketReducer,
	authReducer,
})

export default rootReducer
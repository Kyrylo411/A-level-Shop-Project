import {actionTypes} from '../actions/actionTypes'

const {LOG_IN, LOG_OUT} = actionTypes

const initialUserData = {
	name: '',
	isAuth : false,
}



const authReducer = (state = initialUserData, action) => {
	switch(action.type){
		case LOG_IN : return {
			...state,
			name : action.payload,
			isAuth : true
		}
		case LOG_OUT : return {
			...state,
				name : '',
				isAuth : false	
		}
	
		default : return state
		
	}
}
export default authReducer
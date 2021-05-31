import {actionTypes} from '../actions/actionTypes'
import {addGoodToBasket, decreaseGood} from '../utilityFunc'

const {
	ADD_TO_BASKET,
	INCREASE_GOOD,
	DECREASE_GOOD,
	DELETE_GOOD,
	CLEAR_THE_BASKET,

} = actionTypes

const initialState = {
	orderGoods : []
}

const basketReducer = (state=initialState, action) => {
	switch (action.type){
		case ADD_TO_BASKET : return {
				...state,
				orderGoods: addGoodToBasket(state.orderGoods, action.payload)
		}
		case DELETE_GOOD : return {
			...state,
			orderGoods : state.orderGoods.filter((orderGood)=>{
				return orderGood._id !== action.payload._id
			})
		}
		case INCREASE_GOOD : return {
			...state,
			orderGoods : state.orderGoods.map((orderGood)=>{
				return orderGood._id === action.payload._id ?
				{...orderGood, quantity: orderGood.quantity + 1} :
				orderGood
			})
		}
		case DECREASE_GOOD : return {
			...state,
			orderGoods : decreaseGood(state.orderGoods, action.payload)
		}
		case CLEAR_THE_BASKET : return {
			...state,
			orderGoods : []
		}
		default: return state
	}
}

export default basketReducer

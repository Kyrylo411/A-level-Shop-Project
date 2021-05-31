
export const incGoodInTheBasket = (item) => {
	return {
		type : 'INCREASE_GOOD',
		payload : item
	}
}
export const decGoodInTheBasket = (item) => {
	return {
		type : 'DECREASE_GOOD',
		payload : item
	}
}
export const deleteGoodFromBasket = (item) => {
	return {
		type : 'DELETE_GOOD',
		payload : item
	}
}

export const clearTheBasket = () => {
	return {
		type : 'CLEAR_THE_BASKET'
	}
}

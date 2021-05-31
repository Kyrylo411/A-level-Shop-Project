
export const addGoodToBasket = (orderGoods, addingOrderGood) => {
	const goodInBasket = orderGoods.find(orderGood=>{
		return orderGood._id === addingOrderGood._id
	})

	if(goodInBasket){
		return orderGoods.map(orderGood => {
			return orderGood._id === addingOrderGood._id ? 
			{...orderGood, quantity: orderGood.quantity + 1} :
			orderGood
		})
	}

	return [...orderGoods, {...addingOrderGood, quantity: 1}]
}


export const decreaseGood = (orderGoods, decGood) => {
	const decreasingGood = orderGoods.find((item)=>{
		return item._id === decGood._id
	})
	
	if(decreasingGood.quantity === 1) {
		return orderGoods.filter(item => item._id !== decGood._id )
	}
	return orderGoods.map((item)=>{
		return item._id === decGood._id ? 
		{...item, quantity: item.quantity - 1} :
		item
	})

}

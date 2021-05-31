import React from 'react'
import {useDispatch} from 'react-redux'

import {incGoodInTheBasket, decGoodInTheBasket, deleteGoodFromBasket} from '../../redux/actions/actionCreators/basketActions'
import './OrderBlock.scss'
import Button from '../Button/Button'

export default function OrderBlock(item) {
	const {name, price, quantity, _id} = item
	const dispatch = useDispatch()
	

	const handleIncreaseGood = () => {
		dispatch(incGoodInTheBasket(item))
	}
	const handleDecreaseGood = () => {
		dispatch(decGoodInTheBasket(item))
	}
	const handleDelGoodFromBasket = () => {
		dispatch(deleteGoodFromBasket(item))
	}

	return (
		<div className='orderWrapper' _id={_id}>
			<h4>НАЗВАНИЕ : </h4>
			<span>{name}</span>
			<h4>ЦЕНА : </h4>
			<span>{price} UAH</span>
			{/* <h4>Колличество : </h4> */}
			<Button 
				className='addSubGood'
				value = '-'
				onClick = {handleDecreaseGood}
			/>
			<span>{quantity}</span>
			<Button 
				className='addSubGood'
				value = '+' 
				onClick = {handleIncreaseGood}
			/>
			
			<Button 
				className='deleteGood'
				value = 'Удалить'
				onClick = {handleDelGoodFromBasket}
			/>
		</div>
	)
}

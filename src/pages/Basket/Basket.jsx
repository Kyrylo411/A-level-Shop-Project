import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {clearTheBasket} from '../../redux/actions/actionCreators/basketActions'
import OrderBlock from '../../components/OrderBlock/OrderBlock'
import Button from '../../components/Button/Button'
import './Basket.scss'

export default function Basket({history}) {
	const goodsAddToBasket = useSelector( state => {
		const {basketReducer : {orderGoods}} = state
		return	orderGoods.map((item) => {
			return (
				<OrderBlock
					name = {item.name}
					url = {item.url}
					price = {item.price}
					key = {item._id}
					description = {item.description}
					quantity = {item.quantity}
					_id = {item._id}
				/>
			)
		})
	})

	const getTotalPrice = useSelector( state => {
		const {basketReducer : {orderGoods}} = state
		return orderGoods.reduce((totalAcc, goodPrice)=>{
			return totalAcc + ((+goodPrice.price) * goodPrice.quantity )
		},0)
	})

	
	const dispatch = useDispatch()

	const handleClearBasket = () => {
		dispatch(clearTheBasket())
	}
	const handleMakeOrder = () => {
		dispatch(clearTheBasket())
		history.push('/order-done')
	}
	
	return (
		<div className='basketWrapper'>
			{goodsAddToBasket.length ? 
					<>
					<div className='allOrders'>
						{ goodsAddToBasket}
					</div>
					<div className='totalAndButtonBlock'>
						<div className='totalPriceBlock'>
							<h3>ИТОГОВАЯ ЦЕНА : </h3>
							<span>{getTotalPrice ? getTotalPrice : 0 } UAH</span>
						</div>
		
						<div className='buttonBlock'>
							<Button 
								className='clearBasket'
								value='Очистить корзину'
								onClick = {handleClearBasket}
							/>
							<Button 
								className='makeOrder'
								value='Оформить заказ'
								onClick = {handleMakeOrder}
							/>
						</div>
					</div>
					</> :
					<div className='emptyMessageWrap'>
						<span className='emptyBasketMessage'>Вы ещё ничего не положили в корзину </span>
						<Link className='backToCat' to='/'>В каталог</Link>
					</div>
			}	
		</div>
	)
}

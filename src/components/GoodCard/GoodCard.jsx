import React from 'react'

import './GoodCard.scss'
import Button from '../Button/Button'

export default function GoodCard({name, _id, price, url, toBasketAddClick, onCardClick}) {
	
	return (
		<div className='cardWrapper' id = {_id} >
			<img 
				className='image' 
				src= {url}
				width='350px'
				height='350px'
				alt='good'
				onClick={onCardClick}
			/>
			<div className='descriptionBlock'>
				<h3>Название : {name}</h3>
				<h3>Цена : {price}</h3>
			</div>
			<Button
				className='addToBasket'
				value='Добавить в корзину'
				onClick={toBasketAddClick}
			/>
			</div>
	)
}

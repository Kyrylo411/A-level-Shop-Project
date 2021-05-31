import React from 'react'
import { useDispatch } from 'react-redux'
import {useQuery} from '@apollo/client'

import {FIND_ONE_CATEGORY} from '../../core/MainPage/categoryFindOne-query'
import addingGoodToBasket from '../../redux/actions/actionCreators/goodsActions'
import GoodCard from '../GoodCard/GoodCard'
import Loader from '../Loader/Loader'
import './CatGoodsComponent.scss'
import Button from '../Button/Button'

export default function CatGoodsComponent(props) {

	const {id} = props.match.params
	const dispatch = useDispatch()
	const urlUpload = "http://shop-roles.asmer.fs.a-level.com.ua";
	
	const {loading, error, data} = useQuery(FIND_ONE_CATEGORY, {
		variables: { 
			query:  `[{\"_id\":\"${id}\"}]`
		}
	})
	const handleAddToBasket = (item) => {
		dispatch(addingGoodToBasket(item))
	}

	if(loading){
		return(
			<Loader />
		)
	} 
	if (error){
		return(
			<span className='errorMessage'>Что-то пошло не так. Зайдите позже...</span>
		)
	}	
	const dataToPage = () => {
	
		if(data) {
			const {CategoryFindOne : {goods}} = data
			if(!goods){
				return (
					<h1>Sorry, no goods here</h1>
				)
			}
			return goods.map((good)=>{
				const {images} = good
				if(images){
					const url = images[0].url
					return(	
						<GoodCard 
							name = {good.name}
							url = {`${urlUpload}/${url}`}
							price = {good.price}
							_id = {good._id}
							key = {good._id}
							toBasketAddClick = {()=>handleAddToBasket(good)}
							onCardClick = {()=>props.history.push(`/good-page/${good._id}`)}
						/>
					)
				}	
				return (
					<GoodCard 
						name = {good.name}
						price = {good.price}
						_id = {good._id}
						key = {good._id}
						toBasketAddClick = {()=>handleAddToBasket(good)}
						onCardClick = {()=>props.history.push(`/good-page/${good._id}`)}
					/>	
				)	
			})
	}}

	return (
		<div className='pageWrapper'>
			<Button 
				className = 'goBack'
				value='<'
				onClick = {()=> props.history.goBack()}
			/>
			{dataToPage()}
		</div>
	)
}

import React from 'react'
import {useQuery} from '@apollo/client'
import { useDispatch } from 'react-redux'

import addingGoodToBasket from '../../redux/actions/actionCreators/goodsActions'
import './GoodPage.scss'
import Loader from '../../components/Loader/Loader'
import Button from '../../components/Button/Button'
import {FIND_ONE_GOOD} from '../../core/MainPage/goodFindOne-query'

export default function GoodPage(props) {

	const dispatch = useDispatch()
	const urlUpload = "http://shop-roles.asmer.fs.a-level.com.ua";
	const {id} = props.match.params
	const {loading, error, data} = useQuery(FIND_ONE_GOOD, {
		variables : {
			query:  `[{\"_id\":\"${id}\"}]`
		}
	})

	if(loading){
		return(
			<Loader />
		)
	} 
	
	if(error){
		console.log(error)
		return(
			<span className='errorMessage'>Что-то пошло не так. Зайдите позже...</span>
		)
	}

	const handleAddToBasket = (item) => {
		dispatch(addingGoodToBasket(item))
	}

	const getDataOnPage = () => {
		if(data){
			const {GoodFindOne} = data
			const {GoodFindOne:{name, price, _id, description, images}} = data
			const url = images[0].url
			return(
				<div className='goodCardWrapper'>
					<Button 
						className = 'goBack'
						value='<'
						onClick = {()=> props.history.goBack()}
					/>
					<img src={`${urlUpload}/${url}`} alt='picture'/>
					<div className='descriptionBlock'>
						<h3>Название :</h3>
						<span>{name}</span>
						<h3>Цена :</h3>
						<span>{price} UAH</span>
						<h3>Описание :</h3>
						<span className='description'>{description}</span>
						<div className='line'/>
						<Button 
							className='addToBasket'
							value='Добавить в корзину'
							onClick={()=>handleAddToBasket(GoodFindOne)}
						/>
					</div>
				</div>
			)
		}
	}
	return (
		<div>
			{getDataOnPage()}
		</div>
	)
}

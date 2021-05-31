import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import CategoryCard from '../CategoryCard/CategoryCard'
import Loader from '../Loader/Loader'
import {ALL_CATEGORIES_QUERY} from '../../core/MainPage/category-queris'
import { useSelector } from 'react-redux'
import './CategoriesComponent.scss'


export default function CategoriesComponent(props) {

	const auth = useSelector(state=>{
		const {authReducer : {isAuth}} = state
		return isAuth
	})

	const {loading, error, data} = useQuery(ALL_CATEGORIES_QUERY)

	const getDataOnPage = () => {
			if(loading){
			return (
				<Loader />
			)
		}

		if(error){
			return(
				<span className='errorMessage'>Что-то пошло не так. Зайдите позже...</span>
			)
		}	
		
		const handleCatClick = (id) => {
			props.history.push(`/category-page/${id}`)
		}
		
		if(data){
			return(
				data.CategoryFind.map(({name, _id, subCategories},index)=>{
					if(subCategories){
						return null
					}
					return (
						<CategoryCard 
							key={index} 
							name={name} 
							_id = {_id}
							onClick = {()=> handleCatClick(_id) }
						/>
					)
				})
			)
		}
	
		
		}

	return (
		<div className='wrapper'>
			{
				auth ? 
				getDataOnPage() : 
				<div>
					<span className='errorMessage2'>
						Для того чтобы пользоваться нашим магазином, вы должны {<Link className='linkToSignIn' to='/sign-in'>войти</Link>} в свой профиль
					</span>
				</div>
				
			}
		</div>
	)
}

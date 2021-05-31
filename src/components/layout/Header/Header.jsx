import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import {logoutAction} from '../../../redux/actions/actionCreators/authActions'
import './Header.scss'

export default function Header() {

	const dispatch = useDispatch()
	const getQuantity = useSelector(state=>{
		const {basketReducer : {orderGoods}} = state
		return orderGoods.reduce((totalQuantity, goddQuantity)=>{
			return totalQuantity + goddQuantity.quantity
		},0)
	})

	const auth = useSelector(state=>{
		const {authReducer: {isAuth}} = state
		return isAuth
	})


	const handleLogOut = () => {
		localStorage.removeItem('token')
		dispatch(logoutAction())
	}


	return (
		<div className='headerWrapp'>
			<Link to='/' className='logo'>SHOP</Link>
			<div className='rightBlock'>				
				{
					auth ? 
					<Link to='/basket' className='basket'>{getQuantity}</Link> :
					null
				}
				<div className='authBlock'>
			
				{
					auth ? 
					<Link to='/' onClick={handleLogOut}>Выход</Link>:
					<Link to='/sign-in' >Вход</Link>
				}
					<Link to='/sign-up'>Регистрация</Link>
					
				</div>
			</div>
		</div>
	)
}

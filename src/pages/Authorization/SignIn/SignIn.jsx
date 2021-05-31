import React, {useState, useEffect} from 'react'
import { useLazyQuery } from '@apollo/client'
import {Link} from 'react-router-dom'
// import jwt from 'jsonwebtoken';
import { useDispatch } from 'react-redux';
 

import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import {SIGN_IN_QUERY} from '../../../core/SignIn/signIn-queries'
import {loginAction} from '../../../redux/actions/actionCreators/authActions'
import './SignIn.scss'


export default function SignIn({history}) {

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()


	const [Login, {data: token}] = useLazyQuery(SIGN_IN_QUERY,{
		variables : {
			login : login,
			password : password
		}
	})

	const loginHandleInput = ({target:{value}}) => {
		setLogin(value)
	}
	const passHandleInput = ({target:{value}}) => {
		setPassword(value)
	}
	
	const handleSignIn = () => {
		Login()
		// setLogin('')
		// setPassword('')
	}

	useEffect(()=>{
		if(token){
			if(token.login){
				localStorage.setItem('token', token.login)
				dispatch(loginAction(login))
				history.push('/')
			}		
		}		
	})

	return (
		<div className='signInWrapp'>
			<div className='signInForm'>
			<Input 
				name = 'Введите имя'
				type = 'text'
				placeholder = 'name'
				value = {login}
				onChange = {loginHandleInput}
			/>
			<Input 
				name = 'Введите пароль'
				type = 'password'
				placeholder = 'password'
				value = {password}
				onChange = {passHandleInput}
			/>
		
			<Button
				value = 'Войти'
				onClick = {()=>handleSignIn(login)}
			/>
			<Link to='sign-up'>Еще не зарегистрировался?</Link>
		</div>
	</div>
	)
}

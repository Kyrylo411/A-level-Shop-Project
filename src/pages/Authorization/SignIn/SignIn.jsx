import React, {useState, useEffect} from 'react'
import { useLazyQuery } from '@apollo/client'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {useFormik} from 'formik'
import * as Yup from 'yup'
 

import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import {SIGN_IN_QUERY} from '../../../core/SignIn/signIn-queries'
import {loginAction} from '../../../redux/actions/actionCreators/authActions'
import './SignIn.scss'


export default function SignIn({history}) {

	const dispatch = useDispatch()

	const {handleSubmit, isValid=false, handleChange, handleBlur, values, touched, errors} = useFormik({
		initialValues : {
			login : '',
			password : ''
		},
		validationSchema : Yup.object({
			login : Yup.string().required('Введите имя'),
			password : Yup.string().required('Введите пароль'),
		}),
		onSubmit : () => {
			Login()
		}
	})
	
	const [Login, {data: token}] = useLazyQuery(SIGN_IN_QUERY,{
		variables : {
			login : values.login,
			password : values.password
		}
	})

	useEffect(()=>{
		if(token){
			if(token.login){
				localStorage.setItem('token', token.login)
				dispatch(loginAction(values.login))
				history.push('/')
			}		
		}		
	})

	return (
		<div className='signInWrapp'>
			<form 
				onSubmit = {handleSubmit}
				className='signInForm'
			>
				<Input 
					name = 'login'
					type = 'text'
					placeholder = 'name'
					onChange = {handleChange}
					value = {values.login}
					onBlur = {handleBlur}
					autoComplete = 'off'
				/>
				{
					touched.login && errors.login ? 
					<span>{errors.login}</span> :
					null
				}
				<Input 
					name = 'password'
					type = 'password'
					placeholder = 'password'
					value = {values.password}
					onChange = {handleChange}
					onBlur = {handleBlur}
				/>
				{
					touched.password && errors.password ? 
					<span>{errors.password}</span> :
					null
				}
			<Button
				value = 'Войти'
			/>
			<Link to='sign-up'>Еще не зарегистрировался?</Link>
		</form>
	</div>
	)
}


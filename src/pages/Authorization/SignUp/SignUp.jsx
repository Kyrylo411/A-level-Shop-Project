import React from 'react'
import {useMutation} from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import Input from '../../../components/Input/Input.jsx'
import Button from '../../../components/Button/Button.jsx'
import './SignUp.scss'
import {SIGN_UP_MUTATION} from '../../../core/SignUp/signUp-mutations'

export default function SignUp({history}) {

	const {handleSubmit, isValid=false, handleChange, handleBlur, values, touched, errors} = useFormik({
		initialValues : {
			login : '',
			password : '',
			chekPassword : ''
		},	
		validationSchema: Yup.object({
			login: Yup.string().max(10, 'Не больше 10 символов').required('Введите имя'),
			password: Yup.string().min(6, 'Не короче 6 символов').required('Введите пароль'),
			chekPassword: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Пароли не совпадают')
		}),
		onSubmit: ({login, password, chekPassword}) => {
			handleSignUp(login, password, chekPassword)
		}
	})

	const [registration, {error}] = useMutation(SIGN_UP_MUTATION)

	const handleSignUp = (login, password, chekPassword) => {
		if(localStorage.getItem('token')){
			localStorage.removeItem('token')
			registration({	variables : {	
				login : login,
				password : password
		}})
		}		
		 registration({	variables : {	
			login : login,
			password : password	
		}})
		login = ''
		password = ''
		chekPassword = ''
		history.push('/sign-in')

	}

	return (
	
		
		<div className='signUpWrapp'>
				<form 
					onSubmit = {handleSubmit}
					className='signUpForm'>
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
				<Input 
					name = 'chekPassword'
					type = 'password'
					placeholder = 'check password'
					value = {values.chekPassword}
					onChange = {handleChange}
					onBlur = {handleBlur}
				/>
					{
					touched.chekPassword && errors.chekPassword ? 
					<span>{errors.chekPassword}</span> :
					null
				}
				<Button
					value = 'Регистрация'
					// disabled = { !isValid }
				/>
				<Link to='sign-in'>Уже зарегистрировался?</Link>
			</form>
		</div>
	)
}


import React, { useState } from 'react'
import {useMutation} from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
// import { Formik, Form, Field, ErrorMessage } from 'formik'

import Input from '../../../components/Input/Input.jsx'
import Button from '../../../components/Button/Button.jsx'
import './SignUp.scss'
import {SIGN_UP_MUTATION} from '../../../core/SignUp/signUp-mutations'

export default function SignUp({history}) {

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [chekPassword, setCheckPassword] = useState('')

	const [registration, {error}] = useMutation(SIGN_UP_MUTATION)

	const loginHandler = ({target}) => {
		setLogin(target.value)
	}
	const passwordHandler = ({target}) => {
		setPassword(target.value)
	}
	const checkPassHandler = ({target}) => {
		setCheckPassword(target.value)
	}
	const handleSignUp =  () => {
		if(chekPassword !== password){
			console.log('error')
		}

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
		setLogin('')
		setPassword('')
		setCheckPassword('')
		history.push('/sign-in')

	}

	return (
		// <Formik
		// 		initialValues={{ login: '' , password: '', chekPassword: ''  }}
		// 		validate={values => {
		// 		const errors = {};
		// 		if (!values.login) {
		// 			errors.login = 'Required';
		// 		}
		// 		if (!values.password) {
		// 			errors.password = 'Required';
		// 		}else if(values.password.length < 6){
		// 			errors.password = 'Пароль должен быть не менее 6 символов'
		// 		}
		// 		if(values.password !== values.chekPassword){
		// 			errors.chekPassword = 'Проверьте правильность пароля!'
		// 		}
		// 		return errors;
		// 		}}
		// 		onSubmit={(values,{ setSubmitting }) => {
		// 			if(localStorage.getItem('token')){
		// 				localStorage.removeItem('token')
		// 				registration({	variables : {	
		// 					login : values.login,
		// 					password : values.password
		// 			}})
		// 			}		
		// 			 registration({	variables : {
						
		// 					login : values.login,
		// 					password : values.password
						
		// 			}})
		// 			setSubmitting(false) 
		// 			history.push('/sign-in')
		// 		}}
		// >
		// 	{({ isSubmitting }) => (
		// 	<Form className='signUpWrapp'> 
		// 		<div className='signUpForm'>
		// 			<Field 
		// 				type="text" 
		// 				name="login" 
		// 				// onChange = {loginHandler}
		// 				// component = {Input}

		// 			/>
		// 			<ErrorMessage 
		// 				name="login" 
		// 				component="div" 
		// 			/>
		// 			<Field 
		// 				type="password" 
		// 				name="password" 
		// 				// onChange = {passwordHandler}
		// 				// component = {Input}	
						
		// 			/>
		// 			<ErrorMessage 
		// 				name="password" 
		// 				component="div" 
		// 			/>
		// 			<Field 
		// 				type="password" 
		// 				name="chekPassword" 
		// 				// onChange = {checkPassHandler}
		// 				// component = {Input}
						
		// 			/>
		// 			<ErrorMessage 
		// 				name="chekPassword" 
		// 				component="div" 
		// 			/>
		// 			<button 
		// 				type='submit'
		// 				disabled={isSubmitting}
		// 				>Submit</button>
		// 			{/* <Button 
		// 				type="submit" 
		// 				disabled={isSubmitting} 
		// 				value= 'Регистрация'
		// 				// onClick={handleSignUp}
		// 				/> */}
		// 		</div>
		// 	</Form>
		// 	)}
		// </Formik> 

		<div className='signUpWrapp'>
				<div className='signUpForm'>
				<Input 
					name = 'Введите имя'
					type = 'text'
					placeholder = 'name'
					value = {login}
					onChange = {loginHandler}
				/>
				<Input 
					name = 'Введите пароль'
					type = 'password'
					placeholder = 'password'
					value = {password}
					onChange = {passwordHandler}
				/>
				<Input 
					name = 'Введите пароль еще раз'
					type = 'password'
					placeholder = 'check password'
					value = {chekPassword}
					onChange = {checkPassHandler}
				/>
				<Button
					value = 'Регистрация'
					onClick = {handleSignUp}
					// disabled = {  }
				/>
				<Link to='sign-in'>Уже зарегистрировался?</Link>
			</div>
		</div>
	)
}



// import { Formik, Form, Field, ErrorMessage } from 'formik';

// return (
//   <Formik
//      initialValues={{ email: '', password: '' }}
//      validate={values => {
//        const errors = {};
//        if (!values.email) {
//          errors.email = 'Required';
//        } else if (
//          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//        ) {
//          errors.email = 'Invalid email address';
//        }
//        return errors;
//      }}
//      onSubmit={(values, { setSubmitting }) => {
//        setTimeout(() => {
//          alert(JSON.stringify(values, null, 2));
//          setSubmitting(false);
//        }, 400);
//      }}
//    >
//      {({ isSubmitting }) => (
//        <Form> // уже не просто <form>, в собственній компонент Формика
//          <Field type="email" name="email" />
//          <ErrorMessage name="email" component="div" />
//          <Field type="password" name="password" />
//          <ErrorMessage name="password" component="div" />
//          <button type="submit" disabled={isSubmitting}>
//            Submit
//          </button>
//        </Form>
//      )}
//   </Formik> 
// )

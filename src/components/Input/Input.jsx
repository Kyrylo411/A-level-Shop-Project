import React from 'react'
import './Input.scss'

const Input = ({name,type,placeholder,value, onChange, onBlur, autoComplete})=>{
	return(
		<div className='label'>
			<input
				name = {name}
				className = 'input'
				type = {type}
				placeholder = {placeholder}
				value = {value}
				onChange = {onChange}
				onBlur = {onBlur}
				autoComplete = {autoComplete}
				
			/>
		</div>
	)
}
export default Input
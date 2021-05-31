import React from 'react'
import './Input.scss'

const Input = ({name,type,placeholder,value, onChange})=>{
	return(
		<label className='label'>
			{name}
			<input
				className = 'input'
				type = {type}
				placeholder = {placeholder}
				value = {value}
				onChange = {onChange}
				
			/>
		</label>
	)
}
export default Input
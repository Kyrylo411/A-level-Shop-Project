import React from 'react'
import './Button.scss'

export default function Button({value, onClick, className, disabled, type}){
	return(
		<div>
			<button 
				type = {type}
				className={className || 'button'}
				onClick={onClick}
				disabled={disabled}
				>
				{value}
			</button>
		</div>
	)
}
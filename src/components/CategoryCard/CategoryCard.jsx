import React from 'react'
import './CatergoryCard.scss'

export default function CategoryCard({name, onClick, id}) {
	return (
		<div 
			className='CatWrapp'
			onClick={onClick}
			id = {id}
		>
			<h3> {name} </h3>
			
		</div>
	)
}

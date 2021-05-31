import React from 'react'

import './NotFoundPage.scss'
import Button from '../../components/Button/Button'

export default function NotFoundPage({history}) {

	const handleGetToMain = () => {
		history.push('/')
	}
	return (
		<div className='notFoundWrapper'>
			<h1>#Not Found</h1>
			<Button 
				value='На главную'
				onClick={handleGetToMain}
			/>
		</div>
	)
}

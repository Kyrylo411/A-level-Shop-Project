import React from 'react'
import {Route} from 'react-router-dom'

import CatGoodsComponent from '../../components/CatGoodsComponent/CatGoodsComponent'

export default function CategoryPage(props) {
	return (
		<div>
			<Route exact path={`${props.match.path}`} component = {CatGoodsComponent} />
		</div>
	)
}
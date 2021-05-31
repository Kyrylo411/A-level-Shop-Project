import React from 'react'
import {Route} from 'react-router-dom'

import CategoriesComponent from '../../components/CategoriesComponent/CategoriesComponent'

export default function MainPage(props) {
	return (
		<Route exact path={`${props.match.path}`} component={CategoriesComponent} />
	)
}


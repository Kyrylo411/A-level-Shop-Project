import React from 'react'
import {useQuery} from '@apollo/client'

import {FIND_ONE_CATEGORY} from '../../core/MainPage/categoryFindOne-query'
import GoodCard from '../../components/GoodCard/GoodCard'
// import CatGoodsComponent from '../../components/CatGoodsComponent/CatGoodsComponent'

export default function TEST_GRAPH_QL(props) {

	// const _id = "5dc4b2553f23b553bf3540fc"
	const {id} = props.match.params
	console.log(id)
	
	const {loading, error, data} = useQuery(FIND_ONE_CATEGORY, {
		variables: { 
			query:  `[{\"_id\":\"${id}\"}]`
		}
	})

	console.log(data)

	

	const dataToPage = () => {
		if(data){
			const {CategoryFindOne: {goods}} = data
			// console.log(goods) 
			return goods.map(({name, price, _id})=>{
				return (
					<GoodCard 
						name = {name}
						price = {price}
						_id = {_id}
						key = {_id}
					/>
				)
			})
		}
	}


	return (
		<div>
			{dataToPage()}
		</div>
	)
}

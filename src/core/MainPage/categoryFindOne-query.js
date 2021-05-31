import gql from 'graphql-tag'

export const FIND_ONE_CATEGORY = gql`
	query findOneCat($query: String){
		CategoryFindOne(query: $query){
		_id
		name
		goods {
		_id
		name
		description
		price
		images{
			url
		}
		}    
	}
	}`

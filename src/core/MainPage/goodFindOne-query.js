import gql from 'graphql-tag'

export const FIND_ONE_GOOD = gql`
	query goodFindOne($query: String){
		GoodFindOne(query: $query){
			_id
			name
			description
			price
			images{
			url
			}
	}
	}`
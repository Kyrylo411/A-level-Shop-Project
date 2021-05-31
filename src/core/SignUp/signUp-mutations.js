import gql from 'graphql-tag'

export const SIGN_UP_MUTATION = gql`
	mutation registration ($login:String, $password:String){
		UserUpsert(user: {login:$login, password:$password}){
	_id, login
	}
	}`

export const FIND_ALL_USERS = gql `
	query findAllUsers{
			UserFind(query:"[{}]"){
				login
			}
	}
`
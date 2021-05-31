import gql from 'graphql-tag'

export const SIGN_IN_QUERY = gql`
	query SignIn($login: String!, $password: String!){
		login(login: $login, password: $password)
	}`
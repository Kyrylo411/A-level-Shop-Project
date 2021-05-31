import React from 'react'
import { ApolloProvider as Provider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const contexLink = setContext((_, {headers})=>{
	const token = localStorage.getItem('token')
	// console.log('token', token)
	// console.log(token && token !== 'null' )
	return {
		headers : {
			...headers,
			Authorization: token && token !== 'null' && token!=='undefined' ? `Bearer ${token}` : undefined,
		},
	}
})


const onErrorLink = onError(({graphQLErrors, networkError}) => {
	if(graphQLErrors)
	graphQLErrors.forEach(({message, locations, path})=>{
		console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
	})
	if (networkError) console.log(`[Network error]: ${networkError}`)
})

const httpLink = new HttpLink({
	uri : 'http://shop-roles.asmer.fs.a-level.com.ua/graphql',
})

const client = new ApolloClient({
	link: ApolloLink.from([onErrorLink, contexLink, httpLink]),
	cache: new InMemoryCache({
		addTypename: true,
		resultCaching: true,
	}),
})

export const ApolloProvider = ({ children }) => (
	<Provider client={client}>{children}</Provider>
)

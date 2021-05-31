import gql from 'graphql-tag'

export const ALL_CATEGORIES_QUERY = gql`
	query categories {
		CategoryFind(query: "[{}]"){
			_id
			name
			 subCategories{
        name
      }
		}
	}`
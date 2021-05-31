import gql from 'graphql-tag'

const ALL_GOODS_QEURY = gql`  query goods {
	GoodFind(query:"[{}]"){
		name
		_id
		price
		description
		images {
		url
	}
	}
	}`

  export default ALL_GOODS_QEURY
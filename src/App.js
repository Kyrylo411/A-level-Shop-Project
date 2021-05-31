import {Switch, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {ApolloProvider} from './core/ApolloProvider'

import './App.css';
import Header from './components/layout/Header/Header.jsx'
import PrivateRoute from './components/PrivateRote'
import {
	SignIn,
	SignUp,
	Basket,
	MainPage,
	CategoryPage,
	GoodPage,
	OrderDonePage,
	NotFoundPage
} from './pages/index'


function App() {

	const auth = useSelector(state => {
	const {authReducer:{isAuth}} = state
	return isAuth 
	})

  return (
	<ApolloProvider>
		<Header />
		<Switch>
			<Route exact path='/' component={MainPage} />
			<Route path='/sign-up' component={SignUp} />
			<Route path='/sign-in' component={SignIn} />
			<PrivateRoute path='/basket' isAuthenticated={auth}  component={Basket} />
			<PrivateRoute path='/category-page/:id' isAuthenticated={auth}  component={CategoryPage} />
			<PrivateRoute path='/good-page/:id' isAuthenticated={auth}  component={GoodPage} />
			<PrivateRoute path='/order-done' isAuthenticated={auth}  component={OrderDonePage} />
			<Route component={NotFoundPage} />
		</Switch>
	</ApolloProvider>
	);
}

export default App;

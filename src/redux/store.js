import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const localStorageMiddleware = ({getState}) => {
	return (next) => (action) => {
		const result = next(action);
		localStorage.setItem('applicationState', JSON.stringify(getState()));
		return result;
	};
};

const reHydrateStore = () => {
	if (localStorage.getItem('applicationState') !== null) {
		return JSON.parse(localStorage.getItem('applicationState'))
	}
}

export const store = createStore(
	rootReducer,
	reHydrateStore(), 
	composeWithDevTools(applyMiddleware(thunk,localStorageMiddleware))
)


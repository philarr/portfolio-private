import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import Reducer from '../reducers'
import thunk from 'redux-thunk'


 export default function configureStore(initialState = {}) {
    const store = createStore(
    	combineReducers({ 
    		reduxAsyncConnect, 
    		Reducer	
    	}),
    	initialState, 
     	compose(
     		applyMiddleware(thunk),
     		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
     	)
    );
    return store;
  }
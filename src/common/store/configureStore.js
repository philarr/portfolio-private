import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import pmhc from '../reducers'
import thunk from 'redux-thunk'


 export default function configureStore(initialState = {}) {
    const store = createStore(
    	//reducer namespaces: redux-connect, pmhc.co
    	combineReducers({ 
    		reduxAsyncConnect, 
    		pmhc	
    	}),
        /* can apply localStorage state here */ 
    	initialState,
    	// apply thunk and reduxdevtools
     	compose(
     		applyMiddleware(thunk),
     		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
     	)
    );
    return store;
  }
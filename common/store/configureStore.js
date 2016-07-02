import { createStore, combineReducers } from 'redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import Reducer from '../reducers'


 export default function configureStore(initialState = {}) {
    const store = createStore(combineReducers({
    	reduxAsyncConnect, 
    	Reducer	
    }), initialState,
      process.env.NODE_ENV === 'development' && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    );
    return store;
  }
import { createStore, applyMiddleware } from 'redux'
import Reducer from '../reducers'


 export default function configureStore(initialState) {
    const store = createStore(Reducer, initialState, 
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    );
    return store;
  }
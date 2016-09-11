// Reducer
// ================================================


/* State object shape 
  {
    reduxAsyncConnect: {...}
    Reducer: {
      projects: [...],
      case: {
        'project-name': ...
      }
    }
  }
*/ 
export default (state = { projects: [], cases: {}}, action) => {

	switch(action.type) {
		case 'FETCH_PROJECT': 
			return { 
        ...state, 
        'projects': action.data
      };
    case 'FETCH_PROJECT_INFO': 
      return { 
        ...state, 
          cases: { 
            ...state.cases,
            [action.id]: action.data,
          }
      };
		default: 
			return state;
	}
}
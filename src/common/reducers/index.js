 

export default (state = { }, action) => {

	switch(action.type) {
		case 'UPDATE_PROJECT': 
			return { ...state, 'projects': action.data};
		default: 
			return state;
	}

 
}


export default (state = {}, action) => {

	switch(action.type) {
		case 'SAY_HELLO': 
			return {'say': action.msg}
		default: 
			return state;
	}

 
}
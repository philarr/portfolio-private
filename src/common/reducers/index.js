/* 
 * PMHC.co Portfolio 2016 
 * Reducers
 */

const DEFAULT_STATE = {
    meta: {}, 
    profile: {},
    contact: {},
    projects: [], 
    cases: {},
    environment: {
        menuOpen: false
    }
};

export default (state = DEFAULT_STATE, action) => {

	switch(action.type) {
        case 'FETCH_PROFILE':
            return {
                ...state,
                'meta': action.meta,
                'profile': action.result[0]
            };
        case 'FETCH_CONTACT':
            return {
                ...state,
                'meta': action.meta,
                'contact': action.result[0]
            };
		case 'FETCH_PROJECT': 
            return { 
                ...state, 
                'meta': action.meta,
                'projects': action.result
            };
        case 'FETCH_PROJECT_INFO': 
            return { 
                ...state, 
                cases: { 
                    ...state.cases,
                    [action.id]: action.result[0]
                }
            };
        case 'TOGGLE_MENU':
            return {
                ...state,
                'environment': {
                    ...state.environment,
                    menuOpen: !state.environment.menuOpen
                }
            };
        default: 
			return state;
	}
};

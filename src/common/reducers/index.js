// Reducer
// ================================================


const DEFAULT_STATE = {
    meta: {}, 
    profile: {},
    contact: {},
    projects: [], 
    cases: {},
    environment: {
        menuOpen: false,
        heroLoaded: false,
    }
};

export default (state = DEFAULT_STATE, action) => {

	switch(action.type) {
        case 'FETCH_META': 
        return { 
            ...state, 
            'meta': action.data
        };
        case 'FETCH_PROFILE':
        return {
            ...state,
            'profile': action.data
        };
        case 'FETCH_CONTACT':
        return {
            ...state,
            'contact': action.data
        };
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
        case 'TOGGLE_MENU':
        return {
            ...state,
            'environment': {
                ...state.environment,
                menuOpen: !state.environment.menuOpen
            }
        };
        case 'SET_HERO_LOADED': 
        return { 
            ...state, 
            'environment': {
                ...state.environment,
                heroLoaded: action.data
            }
        };
        default: 
			return state;
	}
};

/* 
 * PMHC.co Portfolio 2016 
 * Async Actions
 */
import fetch from 'isomorphic-fetch';

// Resolve path for isomorphic fetch
function FETCH_API(path) {
	return fetch((process.env.CanUseDom ? '' : 'http://' + process.env.HOST + ':' + process.env.PORT) + path).then(response => response.json());
}

/* Returns list of projects 
 * Called when visitor hits '/' and '/case/:uid', the latter will also fetch additional selected project details
 */
export function getProjectList() {
	/* Dispatch will return a promise if thunk does */
	return (dispatch, getState) => {  

 		/*	Check if existing store is available to prevent unnecessary fetch,
 			Server side: this will always be 0 since we are working with a fresh
 			state on every request.
 		 */
		if (getState().pmhc['projects'].length > 0) {
			return Promise.resolve();
		}

		return FETCH_API('/api/case')
	      .then(({ meta, result }) => {
			if (result.length > 0) {
				dispatch({
					type: 'FETCH_PROJECT',	
					meta,
					result
				});
			}
	      })
    };
}

export function getProjectInfo(id) {
	return (dispatch, getState) => {  

 		// Check if result exists in store
		if (getState().pmhc.cases[id]) {
			return Promise.resolve();
		}

		return FETCH_API('/api/case/' + id)
	      .then(({ meta, result }) => {
			if (result.length > 0) {
			 	dispatch({
                    type: 'FETCH_PROJECT_INFO',
					id,
					meta,
					result
				});
			}
	      })
    };
}

export function getProfile() {
	return (dispatch, getState) => {  

 		// Check if result exists in store
		if (Object.keys(getState().pmhc.profile).length > 0) {
			return Promise.resolve();
		}

		return FETCH_API('/api/profile')
	      .then(({ meta, result }) => {
	      	if (result.length > 0) {
		      	dispatch({
		      		type: 'FETCH_PROFILE',
		      		meta,
		      		result
		      	});
	      	}
	      })
    };
};

export function getContact() {
	return (dispatch, getState) => {  
 
 		// Check if result exists in store
		if (Object.keys(getState().pmhc.contact).length > 0) {
			return Promise.resolve();
		}

		return FETCH_API('/api/contact')
	      .then(({ meta, result }) => {
	      	if (result.length > 0) {
		      	dispatch({
		      		type: 'FETCH_CONTACT',
		      		meta,
                    result
		      	}) 
	      	}
	      })
    };
};
 
export function toggleMenu() {
	return {
		type: 'TOGGLE_MENU'
	};
}



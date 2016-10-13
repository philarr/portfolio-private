// Async Actions 
// ================================================
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
	      .then(data => {
	      	dispatch({
	      		type: 'FETCH_PROJECT',	
	      		data: data
	      	});
	      })
    };
}


export function getProjectInfo(id) {
	return (dispatch, getState) => {  

 		// check if case property exist
		if (getState().pmhc.cases[id]) {
			return Promise.resolve();
		}

		return FETCH_API('/api/case/' + id)
	      .then(data => {
	      	if (data.length > 0) {
		      	dispatch({
		      		type: 'FETCH_PROJECT_INFO',
		      		id: id,
		      		data: data[0]
		      	}) 
	      	}
	      })
    };
}

export function getMeta() {
	return (dispatch, getState) => {  
 
 		// check if any properties exist
		if (Object.keys(getState().pmhc.meta).length > 0) {
			return Promise.resolve();
		}

		return FETCH_API('/api')
	      .then(data => {
	      	if (data.length > 0) {
		      	dispatch({
		      		type: 'FETCH_META',
		      		data: data[0]
		      	}) 
	      	}
	      })
    };
};

export function getProfile() {
 
	return (dispatch, getState) => {  
 
 		// check if any properties exist
		if (Object.keys(getState().pmhc.profile).length > 0) {
	 
			return Promise.resolve();
		}

		return FETCH_API('/api/profile')
	      .then(data => {
	      	if (data.length > 0) {
		      	dispatch({
		      		type: 'FETCH_PROFILE',
		      		data: data[0]
		      	}) 
	      	}
	      })
    };
};

export function getContact() {
 
	return (dispatch, getState) => {  
 
 		// check if any properties exist
		if (Object.keys(getState().pmhc.contact).length > 0) {
	 
			return Promise.resolve();
		}

		return FETCH_API('/api/contact')
	      .then(data => {
	      	if (data.length > 0) {
		      	dispatch({
		      		type: 'FETCH_CONTACT',
		      		data: data[0]
		      	}) 
	      	}
	      })
    };
};


export function setHeroLoaded() {
	return {
		type: 'SET_HERO_LOADED',
		data: true
	};
}

export function toggleMenu() {
	return {
		type: 'TOGGLE_MENU'
	};
}



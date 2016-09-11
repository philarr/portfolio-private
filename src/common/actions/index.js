// Async Actions 
// ================================================
import fetch from 'isomorphic-fetch'

// Resolve path for isomorphic fetch
const SERVER_PATH = (process.env.CanUseDom) ? '' : 'http://' + process.env.HOST + ':' + process.env.PORT;
 

/* Returns list of projects 
 * Called when visitor hits '/' and '/case/:uid', the latter will also fetch additional selected project details
 */

export function getProjectList() {
 /* Dispatch will return a promise if thunk does */
 return (dispatch, getState) => {  

 		/*	Check if existing store is available to prevent unnecessary fetch,
 			Server side, this will always be 0 since we are working with a fresh
 			state on every request.
 		 */
		if (getState().pmhc['projects'].length > 0) {
			return Promise.resolve();
		}

		return fetch(SERVER_PATH + '/api')
	      .then(response => response.json())
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
 
		if (getState().pmhc.cases[id]) {
			return Promise.resolve();
		}

		return fetch(SERVER_PATH + '/api/' + id)
	      .then(response => response.json())
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

 
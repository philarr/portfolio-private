const SERVER_PATH = (process.env.CanUseDom) ? '' : 'http://' + process.env.HOST + ':' + process.env.PORT;



export function getProjectList() {
 
 return (dispatch, getState) => {  

		if (getState().Reducer['projects']) {
			return Promise.resolve(
				getState().Reducer.projects
			);
		}

		return fetch(SERVER_PATH + '/api')
	      .then(response => response.json())
	      .then(data => {
	      	dispatch({
	      		type: 'UPDATE_PROJECT',
	      		data: data
	      	});
	      })
    };
}

 
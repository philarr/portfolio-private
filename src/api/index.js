import Express from 'express'
import data from './projects.json'

/* Express REST API routes */
const api = Express.Router();


api.get('/', (req, res) => {
	res.status(200).json(data.meta);
});
 
api.get('/case', (req, res) => {
	res.status(200).json(getProjectListing(data.projects));
});

api.get('/case/:uid', (req, res) => {
	res.status(200).json(getProjectCase(data.projects, req.params.uid))
})

 
// Returns minimum information for front page listing 
function getProjectListing(Projects) {
	return Projects.map(({ uid, name, year, type, desc, tech, color, assets }) => ({ uid, name, year, type, desc, tech, color, assets }));
}

// Returns full description
function getProjectCase(Projects, selectedId) {
	return Projects.filter((item) => (item.uid === selectedId)).map(({ overview, components, design }) => ({ overview, components, design }));
}


export default api;
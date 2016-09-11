import Express from 'express'
import Projects from './projects.json'


/* Express REST API routes */



const router = Express.Router();

router.get('/', (req, res) => {
	res.status(200).json(getProjectListing(Projects));
});

router.get('/:uid', (req, res) => {
	res.status(200).json(getProjectCase(Projects, req.params.uid))
})


// Returns minimum information for front page listing 
function getProjectListing(Projects) {
	return Projects.map(({ uid, name, year, type, desc, tech, color, assets }) => ({ uid, name, year, type, desc, tech, color, assets }));
}

// Returns full description
function getProjectCase(Projects, selectedId) {
	return Projects.filter((item) => (item.uid === selectedId)).map(({ overview, components, design }) => ({ overview, components, design }));
}


export default router;
/* 
 * PMHC.co Portfolio 2016 
 * Server API
 */
import Express from 'express';
import data from './projects.json';
import Result from './result'; 

// Express REST API routes 
const api = Express.Router();

// Result handler for JSON data
const result = new Result(data);

// API routes
api.get('/profile', (req, res) => {
	res.status(200).json(result.getProfile());
});

 
api.get('/case', (req, res) => {
	res.status(200).json(result.getProjectListing());
});

api.get('/case/:uid', (req, res) => {
	res.status(200).json(result.getProjectCase(req.params.uid));
});

api.get('*', (req, res) => {
	res.status(200).json(result.nomatch());
});

export default api;

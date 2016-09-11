/* ProjectViewer container 
   ======================= */

import React from 'react';
import { Element } from 'react-scrollkit';
import { asyncConnect } from 'redux-connect';
import { getProjectList, getProjectInfo } from '../actions';
import Hero from './Hero'
import ProjectCase from './ProjectCase';
import ProjectListItem from './ProjectListItem';
import Footer from './Footer';
import ErrorPage from './ErrorPage';


// Fetch on any route change 
const asyncProps = [
	{ promise: ({ store: { dispatch }}) => dispatch(getProjectList()) },
	{ promise: ({ store: { dispatch }, params: { id } }) => id ? dispatch(getProjectInfo(id)) : Promise.resolve() }
];
// Props from pmhc namespace, params.id from ownProps
const mapProps = ({ pmhc: { projects, cases } }, { params: { id } }) => (
	{ 
		projects,
		cases: cases[id] ? cases[id] : false
	});
// Actions
//const mapAction = dispatch => bindActionCreators({ getProjectInfo }, dispatch);

const ProjectViewer = ({ children, projects, cases, location, params: { id } }) => {
	
	//Filters appropriate items to show, if id is selected -> filter only to id and the immediate next 
 	let projectList = id ? projects.filter( (item, idx) => (item.uid === id || projects[idx-1] && projects[idx-1].uid === id)) : projects;
 	//Map first item if id is selected, else map every item
	let projectItems = (id ? projectList.slice(0, 1) : projectList).map( item => <ProjectListItem key={ item.uid } projectItem={ item } projectActive={ (item.uid === id) } />);
	//If case is unavailable, display error component
	let projectCase = cases ? <ProjectCase project={ projectList[0] } cases={ cases } /> : <ErrorPage { ...Error } />;

	return (
		<section>
			{ !id ? <Hero /> : <div /> }
			<Element name="content" className="content">
				{ projectItems }
				{ id && projectCase }
			</Element>
			{  id && React.cloneElement(children, { next: projectList[1] }) || children }
			<Footer />
		</section>
	);
}
//Error
const Error = {
	type: "404",
	message: "Case not found!"
};
//Transition key
ProjectViewer.displayName = "ProjectViewer";

export default asyncConnect(asyncProps, mapProps/*, mapAction*/)(ProjectViewer);

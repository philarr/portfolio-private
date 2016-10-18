/* ProjectViewer container 
   ======================= */
import React from 'react';
import Helmet from 'react-helmet';
import { Element } from 'react-scrollkit';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
 
import Hero from '../components/Hero';
import ProjectListItem from '../components/ProjectListItem';
import ProjectCase from '../components/ProjectCase';
import ProjectNext from '../components/ProjectNext';
import IndexFooter from '../components/IndexFooter';
import ErrorPage from '../components/ErrorPage';
import Footer from '../components/Footer';

import { getProjectList, getProjectInfo } from '../actions';

//Error
const Error = {
	type: "404",
	message: "Case not found!"
};

const IndexFooterProps = {
	subheading: 'Read more about me',
	heading: 'Being self-taught has given me the opportunity to work on projects from the perspective of multiple roles.',
	url: '/profile'
};

// Async props
const mapAsync = [
	{ promise: ({ store: { dispatch }}) => dispatch(getProjectList()) },
	// Fetch project details if id param is specified
	{ promise: ({ store: { dispatch }, params: { id } }) => id ? dispatch(getProjectInfo(id)) : Promise.resolve() }
];
// Props from pmhc namespace, params.id from ownProps
const mapProps = ({ pmhc: { meta, projects, cases, environment } }, { params: { id } }) => (
	{ 
		meta,
		projects,
		cases: cases[id] ? cases[id] : false
	});
// Actions


// Render view
const ProjectViewer = ({ children, projects, cases, meta, location, params: { id }}) => {
	
	//Filters appropriate items to show, if id is selected -> filter only to id and the immediate next 
 	const projectList = id ? projects.filter((item, idx) => (item.uid === id || projects[idx-1] && projects[idx-1].uid === id)) : projects;
 	//Map first item if id is selected, else map every item
	const projectItems = (id ? projectList.slice(0, 1) : projectList).map( item => <ProjectListItem key={ item.uid } cdn={ meta.cdn } projectItem={ item } projectActive={ (item.uid === id) } />);
	//If case is unavailable, display error component
	const projectCase = cases ? <ProjectCase project={ projectList[0] } cdn={ meta.cdn } cases={ cases } /> : <ErrorPage { ...Error } />;
 
	return (
		<div >
			{ id && <Helmet title={ projectList[0].name } /> }
			<section>
				{ !id && <Hero /> || <div />}
				<Element name="content" className="content">
					{ projectItems }
					{ id && projectCase }
				</Element>
			</section>
			{  id && <ProjectNext next={ projectList[1] } /> || <IndexFooter  { ...IndexFooterProps } /> }
			<Footer { ...meta } />
		</div>
	);
};
 
//Transition key
ProjectViewer.displayName = "ProjectViewer";

export default asyncConnect(mapAsync, mapProps)(ProjectViewer);
 

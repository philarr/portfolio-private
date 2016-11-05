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

// Async props
const mapAsync = [
	{ promise: ({ store: { dispatch }}) => dispatch(getProjectList()) },
	// Fetch project details if id param is specified
	{ promise: ({ store: { dispatch }, params: { id } }) => id ? dispatch(getProjectInfo(id)) : Promise.resolve() }
];

// Map props to component
const mapProps = ({ pmhc: { meta, projects, cases } }, { params: { id } }) => ({ 
	meta,
	projects,
	cases: cases[id] ? cases[id] : false
});

const ProjectViewer = ({ children, projects, cases, meta, location, params: { id }}) => {
	
	// Filter available case to id and the immediate next for ProjectNext
 	const projectList = id ? projects.filter((item, idx) => (item.uid === id || projects[idx-1] && projects[idx-1].uid === id)) : projects;
	const projectItems = (id ? projectList.slice(0, 1) : projectList);

	return (
		<div >
			{ id && <Helmet title={ projectList[0].name } /> }
			<section>
				{ !id && <Hero /> || false}
				<Element name="content" className="content">
					{ 
						projectItems.map( item => 
						<ProjectListItem 
							key={ item.uid } 
							cdn={ meta.cdn } 
							projectItem={ item } 
							projectActive={ (item.uid === id) } 
						/> )
					}
					{ 
						id ? (
						cases ? 
						<ProjectCase 
							cdn={ meta.cdn } 
							project={ projectList[0] } 
							cases={ cases } 
						/> :
						<ErrorPage
							type="404"
							message="Case not found!"
						/> ) : false
					}
				</Element>	
			</section>
			{  
				id ? 
				<ProjectNext next={ projectList[1] } /> :
				<IndexFooter
					subheading="Read more about me"
					heading="I had the opportunity to work from the perspective of multiple roles through self-initiated projects."
					url="/profile"
				/> 
			}
			<Footer { ...meta } />
		</div>
	);
};
 
//Transition key
ProjectViewer.displayName = "ProjectViewer";

export default asyncConnect(mapAsync, mapProps)(ProjectViewer);
 

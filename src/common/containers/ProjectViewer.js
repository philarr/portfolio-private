/* ProjectViewer container 
   ======================= */
import React from 'react';
import { Element } from 'react-scrollkit';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectCase from '../components/ProjectCase';
import ProjectListItem from '../components/ProjectListItem';
import ProjectNext from '../components/ProjectNext';
import IndexFooter from '../components/IndexFooter';
import ErrorPage from '../components/ErrorPage';
import { getProjectList, getProjectInfo, setHeroLoaded } from '../actions';

//Error
const Error = {
	type: "404",
	message: "Case not found!"
};
// Async props
const mapAsync = [
	{ promise: ({ store: { dispatch }}) => dispatch(getProjectList()) },
	// Fetch project details if id param is specified
	{ promise: ({ store: { dispatch }, params: { id } }) => id ? dispatch(getProjectInfo(id)) : Promise.resolve() }
];
// Props from pmhc namespace, params.id from ownProps
const mapProps = ({ pmhc: { projects, cases, environment } }, { params: { id } }) => (
	{ 
		isHeroLoaded: environment.heroLoaded,
		projects,
		cases: cases[id] ? cases[id] : false
	});
// Actions
const mapActions = dispatch => bindActionCreators({ setHeroLoaded }, dispatch);

// Render view
const ProjectViewer = ({ children, projects, cases, isHeroLoaded, setHeroLoaded, location, params: { id }}) => {
	
 
	//Filters appropriate items to show, if id is selected -> filter only to id and the immediate next 
 	const projectList = id ? projects.filter((item, idx) => (item.uid === id || projects[idx-1] && projects[idx-1].uid === id)) : projects;
 	//Map first item if id is selected, else map every item
	const projectItems = (id ? projectList.slice(0, 1) : projectList).map( item => <ProjectListItem key={ item.uid } projectItem={ item } projectActive={ (item.uid === id) } />);
	//If case is unavailable, display error component
	const projectCase = cases ? <ProjectCase project={ projectList[0] } cases={ cases } /> : <ErrorPage { ...Error } />;
 
	return (
		<div >
			<section>
				{ !id && <Hero isLoaded={ isHeroLoaded } setLoaded={ setHeroLoaded } /> || <div />}
				<Element name="content" className="content">
					{ projectItems }
					{ id && projectCase }
				</Element>
			</section>
			{  id && <ProjectNext next={ projectList[1] } /> || <IndexFooter /> }
			 <Footer />
		</div>
	);
}
 
//Transition key
ProjectViewer.displayName = "ProjectViewer";

export default asyncConnect(mapAsync, mapProps, mapActions)(ProjectViewer);
 

import React from 'react'
import ProjectList from './ProjectList'
import { Element } from 'react-scrollkit'
import Hero from './Hero'
import Footer from './Footer'
import { asyncConnect } from 'redux-connect'
import { getProjectList } from '../actions'


/* ProjectViewer
 *
 * Renders Hero/ProjectList/HomeFooter
 * Persist ProjectList to '/case' route to keep from unmounting
 */


const asyncProps = [
	{ promise: ({ store: { dispatch }}) =>  dispatch(getProjectList()) }
];
const mapProps = state => ({ projects: state.pmhc.projects });
 

function ProjectViewer({ projects, children, location, params }) {

	let isIndex = (location.pathname === "/");

	return(
		<section>
				{ isIndex ? <Hero key="hero" /> : <div />}
				<Element name="content" >

		 			<ProjectList projects={ projects } selectedId={ params.id } />

		 			{ children.main }

		 		{ isIndex ? <HomeFooter /> : <div />}
	 			</Element>
			<Footer />
		</section>
	);
}

const ProjectViewerFooter = () => (
	<div className="projects">
		<div className="inner">
			<div className="projects-left">
				<span className="sublabel">Looking for more?</span>
	 			<a className="label">Archive</a>
				<p>Experimental projects from the past.</p>
				<a className="label">Github</a>
				<p>Open source projects I'm involved with.</p>
			</div>
			<div className="projects-right">
				<span className="sublabel">Read more about me</span>
 				<h1 className="label">
					I had the opportunity to work on projects from the perspective of different roles.
				</h1>
			</div>
		</div>
	</div>
);

ProjectViewer.displayName = "ProjectViewer";
export default asyncConnect(asyncProps, mapProps)(ProjectViewer);

 
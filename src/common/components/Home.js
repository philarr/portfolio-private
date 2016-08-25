import React from 'react'
import ProjectList from './ProjectList'
import { Element } from 'react-scrollkit'
import Hero from './Hero'
import Footer from './Footer'
import { asyncConnect } from 'redux-connect'
import { getProjectList } from '../actions'



export default asyncConnect([{
	promise: ({ params, helpers, store: { dispatch }}) =>  dispatch(getProjectList())
}], state => ({
    projects: state.Reducer.projects
}))(Home);

Home.displayName = "Home";
function Home({ projects, children, location, params }) {
	return(
			<section>
				{ (location.pathname === "/") ? <Hero key="hero" /> : null}
					<Element name="content" >
			 			<ProjectList projects={ projects } selectedId={ params.id }> 

							{ children }

			 			</ProjectList>
							<div className="projects">
							<div className="inner">
								<div className="projects-left">
									<span className="sublabel">Looking for more?</span>
				 	 				<h1 className="label">
				 						Archive
									</h1>
									<p>Experimental projects from the past.</p>

 									<h1 className="label">
				 						Github
									</h1>
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
		 			</Element>
				<Footer />
	 		</section>
	);
}

 
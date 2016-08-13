import React from 'react'
import Hero from './Hero'
import ProjectList from './ProjectList'
import Footer from './Footer'
import { Element, Reveal } from 'react-scrollkit' 

class Home extends React.Component {

 

	componentWillReceiveProps(nextProps) {
		console.log('Home => received new props');
	}


	render() {
		return ( 

			<section className="content">
	 			<Hero />
				<Element name="content" className="push-bottom">
		 			<ProjectList /> 
	 	 			<Footer>

						<div className="projects">
							<div className="inner">
							 
								<div className="projects-left">
									<span className="sublabel">Looking for more?</span>
							

				 	 				<a className="label">
				 						Archive
									</a>
									<p>Experimental projects from the past.</p>

 									<a className="label">
				 						Github
									</a>
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



	 	 			</Footer>
		 		</Element>
	 		</section>
 
		);
	}
}
 
 
 
export default Home
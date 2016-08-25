import { Link } from 'react-router'


import React from 'react'


class Projects extends React.Component {

 

	render() {

		return ( 

			<div className="projects-expanded" style={ { backgroundColor:  this.props.backgroundColor } }>
							<div className="projects">
								<div className="inner">
									<div className="projects-left">
										<h1 className="label">Portfolio<sup>2016</sup></h1>
										<div >Web Application</div>
									</div>
									<div className="projects-right">
								 

										<h2  className="label">
 
The newest iteration of my personal portfolio using universal/isomorphic React.
										</h2>

								 
 
								 				<br /><br />	 	
										<p>

											This project is the result of my initiative on learning modern front-end tools and frameworks. 
											The transition from the usual LAMP stack to the Node.js ecosystem and Javascript as an universal language has
											streamlined my workflow by allowing the creation of reusable code.
 
										</p>

										<p>
											Additionally, a boilerplate is also available for my future React projects.
										</p>
 				 

									</div>
								</div>

							<div className="inner">
									<div className="projects-left">
										<p className="label">Components</p>
 
									</div>
									<div className="projects-right">

									<ul>
										<li className="rect">01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DLL Plugin <span>C#</span></li>
										<li className="rect">02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Server <span>Node.js</span></li>
										<li className="rect">03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Redis <span>Database</span></li>
										<li className="rect">04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Worker <span>Node.js</span></li>
										<li className="rect">05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL <span>Database</span></li>
										<li className="rect">06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Website <span>HTML</span><span>CSS</span><span>PHP</span><span>Javascript</span></li>
									</ul>
								 
 
									</div>
								</div>


</div>
			 
 
			 			<div className="projects grid">	
 
								<div className="inner">
			 
								<div className="inner">
									<div className="projects-left">
										<p className="label">Design & Interface</p>
						 
								 
									</div>
									<div className="projects-right">
								 <p>
								 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque eleifend egestas. Pellentesque scelerisque nulla velit, vitae dignissim lacus blandit ac. In nec nunc ornare, tincidunt nisi eu, consequat odio. Mauris in feugiat nisl. Sed lobortis vitae ipsum vel semper. Donec neque diam, sollicitudin a sodales ullamcorper, imperdiet sodales massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
								 </p>
 								 <p>
								 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque eleifend egestas. Pellentesque scelerisque nulla velit, vitae dignissim lacus blandit ac. In nec nunc ornare, tincidunt nisi eu, consequat odio. Mauris in feugiat nisl. Sed lobortis vitae ipsum vel semper. Donec neque diam, sollicitudin a sodales ullamcorper, imperdiet sodales massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
								 </p>
									</div>
								</div>



					 		</div>
 	</div>
		 	 			 

			</div>


		);
	}
}
 
Projects.displayName = "Projects";
 
export default Projects
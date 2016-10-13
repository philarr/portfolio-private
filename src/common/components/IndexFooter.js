import React from 'react';
import { Link } from 'react-router'

const IndexFooter = () => (
 




		<div className="project-next">
	 		<Link to="/profile" className="project-next-wrapper">
	 		 	 
				<div className="inner">
					<div className="left">

					</div>
					<div className="right">
						<p className="sublabel">Read more about me</p>
		 				<h2 className="label">
							I had the opportunity to work on projects from the perspective of different roles.
						</h2>
					</div>
				</div>
		 	</Link>
		 </div>

);

IndexFooter.displayName = "IndexFooter";
export default IndexFooter;
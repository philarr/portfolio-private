import React from 'react';
import { Link } from 'react-router'

const IndexFooter = ({ subheading, heading, url}) => (
 
		<div className="project-next">
	 		<Link to={ url } className="project-next-wrapper">
				<div className="inner">
					<div className="left">

					</div>
					<div className="right">
						<p className="sublabel">{ subheading }</p>
		 				<h2 className="label">
							{ heading }
						</h2>
					</div>
				</div>
		 	</Link>
		 </div>

);

IndexFooter.displayName = "IndexFooter";
export default IndexFooter;
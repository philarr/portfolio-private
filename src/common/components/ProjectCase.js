import React from 'react';
import { Link } from 'react-router';
import Collapsible from './Collapsible';
import { LazyImage } from 'react-scrollkit';

 
class ProjectCase extends React.Component {


	render() {
		let { name, year, type, color, desc } = this.props.project;
		let { overview, components, design } = this.props.cases;
		let overviewLong = overview.map( (item, idx) => (<p key={ idx }>{ item }</p>));
		 
		return (
			<div className="projects-case" style={ { backgroundColor: color[0] } }>
				<div className="inner">
					<div className="left">
						<h1 className="label">{ name }<sup>{ year }</sup></h1>
						<div>{ type }</div>
					<div className="project-case-desc">
						 <a href="#" className="icon source">Source code</a> <br />
						 <a href="#" className="icon linknew">Visit website</a></div>
					</div>
					<div className="right">
						<h2  className="label">{ desc }</h2>
				 	<div className="project-case-desc">{ overviewLong }</div>
					</div>
				</div>
	 



			  	<div className="grid">
					<div className="inner">
						<div className="left">
							<h3 className="label">Components &ndash;</h3>
							<p>Each component works in tandem to create a flow of information.</p>
						</div>
						<div className="right">
							<Collapsible items={ components.right } />
						</div>
					</div>
					<div className="inner">
						<div className="left">
							<h3 className="label">Design & Interface &ndash;</h3>
							<p>Interface is designed to accommodate the variables of the data collected.</p>
						</div>
						<div className="right">
							<p>
								{ design }
							</p>
						 
						</div>
					</div>
				</div>
			</div>
		);
	}
}
ProjectCase.displayName = "ProjectCase";
export default ProjectCase;

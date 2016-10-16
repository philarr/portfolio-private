import React from 'react';
import { Link } from 'react-router';
import { LazyImage } from 'react-scrollkit';
import Collapsible from './Collapsible';
import TextFormat from './TextFormat';
 
class ProjectCase extends React.Component {

	render() {
		const { name, year, type, color, desc, source, url, display } = this.props.project;
		const { overview, components, design } = this.props.cases;
		const screenshots = design.list.map((item, idx) => (
			<figure key={ idx }>
				<figcaption>{ item.caption }</figcaption>
				<LazyImage src={ this.props.cdn + item.url } className="animated-before" activeClass="fadeInto" />
			</figure>
		));
	 
		return (
			<div className="projects-case" style={ { backgroundColor: color[0] } }>

            
				<div className="inner">
					<div className="left">
						<h1 className="label">{ name }<sup>{ year }</sup></h1>
						<div>{ type }</div>
						<div className="project-case-desc">
							 <a href={ source } target="_blank" className="icon source">View source</a>
							 <a href={ url } target="_blank" className="icon web">Visit website</a>
						</div>
					</div>
					<div className="right">
						<h2 className="label">{ desc }</h2>
				 		<div className="project-case-desc">
					 		<TextFormat>
					 			{ overview }
					 		</TextFormat>
				 		</div>
					</div>
				</div>
 
			  	<div className="grid">
					<div className="inner">
						<div className="left">
							<h3 className="label">Components &ndash;</h3>
							<p>{ components.subtitle }</p>
						</div>
						<div className="right">
							<Collapsible items={ components.list } />
						</div>
					</div>
					<div className="inner">
						<div className="left">
							<h3 className="label">Design & Interface &ndash;</h3>
 							<p>{ design.subtitle }</p>
						</div>
						<div className="right">
						</div>
					</div>
					<div className="inner">
 						{ screenshots }
					</div>
				</div>
			</div>
		);
	}
}
ProjectCase.displayName = "ProjectCase";
export default ProjectCase;

import React from 'react';
import { Link } from 'react-router';
import Image from './Image';
import { LazyImage } from 'react-scrollkit';
import Collapsible from './Collapsible';
import TextFormat from './TextFormat';
 
class ProjectCase extends React.Component {

	render() {
		const { uid, name, year, type, color, desc, source, url, display } = this.props.project;
		const { overview, components, design } = this.props.cases;
 		const imagePath = this.props.cdn + '/images/' + uid + '/';
		const screenshots = design.list.map((item, idx) => (
			<figure key={ idx }>
				<figcaption>{ item.caption }</figcaption>
				<Image size={ item.size }>
					<LazyImage 
						src={ imagePath + item.src } 
						alt={ name + ' - ' + item.caption} 
						title={ name + ' - ' + item.caption } 
						className="animated-before" 
						activeClass="fadeInto" 
					/>
				</Image>
			</figure>
		));
	 
		return (
			<div className="projects-case" style={ { backgroundColor: color[0] } }>
				<div className="inner">
					<div className="left">
						<h1 className="label">{ name }<sup>{ year }</sup></h1>
						<div>{ type }</div>
						<div className="project-case-desc">
							 <a href={ source } target="_blank" className="icon github">View source</a>
							 <a href={ url } target="_blank" className={ 'icon web' + (url ? '' : ' inactive') }>Visit website</a>
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
	 
					</div>
					<div className="inner-full">
						 
 						{ screenshots }
 						 
					</div>
				</div>
			</div>
		);
	}
}
ProjectCase.displayName = "ProjectCase";
export default ProjectCase;

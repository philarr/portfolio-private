import React from 'react'
import { Link } from 'react-router'
import Image from './Image';
import { Reveal, LazyImage } from 'react-scrollkit'

 
const ProjectListItem = ({ projectItem: { tech, uid, color, desc, name, year, type, url, display, background }, projectActive, cdn }) => {

	const projectTech = tech.map((t, idx) => (<span key={ idx }>{ t }</span>)); 
 	const projectClass = projectActive ? 'projects-item active' : 'projects-item';
 	const projectBackground = {'backgroundColor': color[0] };
 	const projectGradient = { background: 'linear-gradient(to bottom, '+ color[0] +' 0%,'+ color[1] +' 60%)' };

 	const imagePath = cdn + '/images/' + uid + '/';

	return (		 	 
 		<div name={ uid } className={ projectClass } style={ projectBackground }>
 			{ projectActive && display.background ? <div className="projects-item-bg" style={ { backgroundImage: 'url(\'' + display.background + '\')' } } /> : false }
			<div className="projects-item-details">
 				<div className="projects-item-overview">
					<div className="projects-item-title">{ name }<sup>{ year }</sup></div>
					<div className="projects-item-desc">
						<p className="label">{ type }</p>
						<p>{ desc }</p>
						<p>{ projectTech }</p>
					</div>	
				</div>
 				<div className="projects-item-image" style={ projectGradient }>
 					<Image size={ display.front.size }>
	 					<Reveal name={ uid } className="animated-before" activeClass="fadeInto">
	 						<img 
	 							src={ imagePath + display.front.src } 
								alt={ name + ' - ' + display.front.caption } 
								title={ name + ' - ' + display.front.caption } 
							/>
	 					</Reveal>
					</Image>
				</div>
			</div>
			<div className="projects-item-bottom"> 
				<div className="inner">
					<Link to={ '/case/' + uid } className="projects-item-view icon eye rect">View Case</Link>
					<a href={ url } target="_blank" className={ 'projects-item-view icon web rect' + (url ? '' : ' inactive') }>Visit website</a>
				</div> 
			</div>
		</div>
	);
}


ProjectListItem.displayName = "ProjectListItem";
export default ProjectListItem
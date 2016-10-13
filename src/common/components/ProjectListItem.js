import React from 'react'
import { Link } from 'react-router'
import { LazyImage, Reveal, Element } from 'react-scrollkit'



const ProjectListItem = ({ projectItem: { tech, uid, color, desc, name, year, type, assets }, projectActive }) => {

	const projectTechList = tech.map((t, idx) => (<span key={ idx }>{ t }</span>)); 
 	const projectCaseLink = '/case/' + uid;
 	const projectClass = projectActive ? 'projects-item active' : 'projects-item';
 	const projectBackground = {'backgroundColor': color[0] };
 	const projectGradient = { background: 'linear-gradient(to bottom, '+ color[0] +' 0%,'+ color[1] +' 60%)' };

	return (		 	 
 		<Element name={ uid } className={ projectClass } style={ projectBackground }>
			<div className="projects-item-details">
 				<div className="projects-item-overview">
					<div className="projects-item-title">{ name }<sup>{ year }</sup></div>
					<div className="projects-item-desc">
						<p className="label">{ type }</p>
						<p>{ desc }</p>
						<p>{ projectTechList }</p>
					</div>	
				</div>
 				<div className="projects-item-image" style={ projectGradient }>
					<LazyImage src={ assets.front } className="animated-before" activeClass="fadeInto" />
				</div>

				{ 
					projectActive ? (
		 				<div className="projects-item-image" style={ projectGradient }>
							<LazyImage src={ assets.front } className="animated-before" activeClass="fadeInto" />
						</div>
					) : false
				}
 
			</div>
			<div className="projects-item-bottom">
				<div className="inner">
					<Link to={ projectCaseLink }className="projects-item-view icon eye rect">View Case</Link>
					<Link to="/case/xivdps3" className="projects-item-view icon web rect">Visit website</Link> 
				</div> 
			</div>
		</Element>
	);
}



ProjectListItem.displayName = "ProjectListItem";
export default ProjectListItem
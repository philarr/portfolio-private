import React from 'react'
import { Link } from 'react-router'
import { LazyImage, Reveal } from 'react-scrollkit'



const ProjectListItem = ({ projectItem, projectActive }) => {

	let projectTechList = projectItem.tech.map((t, idx) => (<span key={ idx }>{ t }</span>)); 
 	let projectCaseLink = '/case/' + projectItem.uid;
 	let projectClass = projectActive ? 'projects-item active' : 'projects-item';
 	let projectBackground = {'backgroundColor': projectItem.color[0] };
 	let projectGradient = { background: 'linear-gradient(to bottom, '+ projectItem.color[0] +' 0%,'+ projectItem.color[1] +' 60%)' };

	return (		 	 
 		<div className={ projectClass } style={ projectBackground } >
			<div className="projects-item-details">
 				<div className="projects-item-overview">
					<div className="projects-item-title">{ projectItem.name }<sup>{ projectItem.year }</sup></div>
					<div className="projects-item-desc">
						<p className="label">{ projectItem.type }</p>
						<p>{ projectItem.desc }</p>
						<p>{ projectTechList }</p>
					</div>	
				</div>
 				<div className="projects-item-image" style={ projectGradient }>
					<LazyImage src={ projectItem.assets.front } className="animated-before" activeClass="fadeInto" />
				</div>

				{ 
					projectActive ? (
		 				<div className="projects-item-image" style={ projectGradient }>
							<LazyImage src={ projectItem.assets.front } className="animated-before" activeClass="fadeInto" />
						</div>
					) : false
				}
 
			</div>
			<div className="projects-item-bottom">
				<div className="inner">
					<Link to={ projectCaseLink }className="projects-item-view icon eye rect">View Case</Link>
					<Link to="/case/xivdps3" className="projects-item-view icon linknew rect">Visit website</Link> 
				</div> 
			</div>
		</div>
	);
}



ProjectListItem.displayName = "ProjectListItem";
export default ProjectListItem
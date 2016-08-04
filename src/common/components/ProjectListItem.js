import React from 'react'
import { Link } from 'react-router'
import { LazyImage } from 'react-scrollkit'


class ProjectListItem extends React.Component {



	render() {



		let { projectItem } = this.props;
		//let projectNum = ( projectItem.id > 9) ?  projectItem.id : ( '0'+ projectItem.id ); 
		let projectTech = projectItem.tech.map((i, k) => (<span key={ k }>{ i }</span>)); 
		let projectBackground = {
			'backgroundColor': this.props.projectItem.color[0]
		};
	 	let projectGradient = {
	 	 	background: 'linear-gradient(to bottom, '+ this.props.projectItem.color[0] +' 0%,'+ this.props.projectItem.color[1] +' 60%)'
	 	};

		return (		 	 
	 		<div className="projects" style={ projectBackground }>
				<div className="projects-details">
					<div className="projects-overview">
						<div className="projects-title">&mdash; { projectItem.name }<sup>{ projectItem.year }</sup></div>

						<div className="projects-desc">
							<div className="label">{ projectItem.type }</div>
							<p>{ projectItem.desc }</p>
							<p>{ projectTech }</p>
						</div>	
					</div>
	 				<div ref="projectsImage" className="projects-image browser-mockup" style={ projectGradient }>
						<LazyImage src={ projectItem.assets.front } className="animated-before" activeClass="fadeInto" />
					</div>
				</div>
				<div className="projects-bottom">
					<div className="inner">
						<Link to="/"className="projects-view icon eye rect">View Case</Link>
						<Link to="/" className="projects-view icon linknew rect">Visit website</Link> 
					</div> 
				</div>
			</div>
		);
	}
}


export default ProjectListItem
import React from 'react';
import { Link } from 'react-router'

class ProjectNext extends React.Component {

	render() {
		const { uid, color, desc } = this.props.next ? this.props.next : { uid: 'x', color: ['#191919'], desc: 'Experimental projects from the past that did not make the cut.' };
		
		return (
		<div className="project-next">
	 		<Link to={ '/case/' + uid } className="project-next-wrapper">
	 			<div className="next-background" ref="nextBg" style={ { backgroundColor: color[0] } } />
				<div className="inner">
					<div className="left">

					</div>
					<div className="right">
						{ this.props.next ? <p className="sublabel">Up next</p> : <p className="sublabel">Project archive</p> }
		 				<h2 className="label">
							{ desc }
						</h2>
					</div>
				</div>
		 	</Link>
		 </div>
		);
	}
}
 


ProjectNext.displayName = "ProjectNext";
export default ProjectNext;

import React from 'react';
import { Link } from 'react-router'

class ProjectNext extends React.Component {

 
	render() {
		let { uid, color, desc } = this.props.next ? this.props.next : { uid: 'x', color: ['#191919'], desc: 'You\'ve reached the end!' };
 
		return (
	 		<Link to={ '/case/' + uid } className="next">
	 			<div className="next-background" ref="nextBg" style={ { backgroundColor: color[0] } } />
				<div className="inner">
					<div className="left">

					</div>
					<div className="right">
						{ this.props.next ? <p className="sublabel">Up next</p> : <p className="sublabel">No more</p> }
		 				<h2 className="label">
							{desc }
						</h2>
					</div>
				</div>
		 	</Link>
		);
	}
}
 


ProjectNext.displayName = "ProjectNext";
export default ProjectNext;
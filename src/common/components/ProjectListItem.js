import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { LazyImage, scroller } from 'react-scrollkit'

 
let Trianglify;
let projectImage = {
 		'1': require('../assets/img/3.png'),
 		'2': require('../assets/img/pmhc.png'),
 		'3': require('../assets/img/1.png'),
 		'4': require('../assets/img/eterna.png'),
 		'5': require('../assets/img/tankwars.png'),
 		'6': require('../assets/img/magister.png'),
 	}

/* client assets */
if ( process.env.CanUseDom ) {
 
 	Trianglify = require('trianglify');
}


class ProjectListItem extends React.Component {


	componentDidMount() {
 		let thisRef = this.refs[this.props.projectItem.name]	;
 		let pattern =  Trianglify({
		        width: thisRef.offsetWidth,
		        height: thisRef.offsetHeight
		  		});
	    //thisRef.appendChild(pattern.canvas());

	}

	render() {
		let { projectItem } = this.props;
		let projectNum = ( projectItem.id > 9) ?  projectItem.id : ( '0'+ projectItem.id ); 
		let projectTech = projectItem.tech.map(i => (i + ' ')); 

		return (
 			<div ref={ projectItem.name } className="row projects">
				<div className="wrapper-expande wrapper-project-item"> 
					<div  className="col-xs-offset-1 col-sm-offset-2 col-md-offset-1 col-lg-offset-4 col-xs-1 col-sm-3 col-md-1">
						<h1>
							{ projectNum }
						</h1>
					</div>
					<div  className="col-xs-24 col-sm-17 col-md-3 col-lg-3">
						<hr className="hr-thick" />
					</div>
					<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-1  col-xs-22 col-md-20 col-lg-9">
	 					<div className="project-item-link">{ projectItem.name } <sup>{ projectItem.year }</sup></div>
					</div>
					<div className="col-lg-2">
						<h2 className="pull-right"><div className="expand"></div></h2>
					</div>
				</div>
				{(() => {
			 	 		if (projectNum == 1)
						return(
							<div className="row project-details">
								<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
									<div className="label">{ projectItem.type }</div>
									<p>
									{ projectItem.desc }
									</p>
									 <div className="label">Tech</div>
									<p>
										{ projectTech }
									</p>
								</div>
								<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-1 col-xs-22 col-md-20 col-lg-11 project-ss">
									
									<LazyImage src={ projectImage[projectItem.id] } className="browser-mockup shadow-2 animated-before" activeClass="fadeInto" />

								</div>
								<div className="col-lg-24 project-bottom">
									<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
										<div className="icon arrowright">View Case Study</div>  
									</div>
								</div>
							</div>
						);

					})()
				}
 
 			</div>
		);
	}
}

/*
ProjectListItem.propTypes = {
	project: React.PropTypes.shape({
	    id: React.PropTypes.number.isRequired,
	    name: React.PropTypes.string.isRequired,
	    type: React.PropTypes.string.isRequired,
	    tech: React.PropTypes.string.isRequired,
	    trianglify: React.PropTypes.array
  }).isRequired,
};
*/
 
export default ProjectListItem
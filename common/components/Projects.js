import React from 'react'
import { Reveal, scroller } from 'react-scroll'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import { Link } from 'react-router'
if ( process.env.BROWSER ) {
 
 
 	var projectImage = require('../assets/img/1.png')
}

 
 
function mapStateToProps(state /*, ownProps */) {
  return {
    project: state.project,
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

class Projects extends React.Component {

	static _fetchData() {
		return "hello"
	}

	componentDidMount() {
 
	}

 	componentWillReceiveProps(nextProps) {
 		if (nextProps.params.testId !== this.props.params.testId) {
 		 
 		}
 	}

	render() {
		let projectNum = this.props.project.length+1;
		return ( 
		<div className="content-bg wrapper-animated">
 
 			<div className="projects row">
				<Reveal name="profile-expanded-1" once={ true } activeClass="animated fadeInUp" className="row wrapper-expanded animated-before page-header"> 
					<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
					 	<hr className="hr-thick" />

					</div>
					<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-1 col-xs-22 col-md-20 col-lg-10">
	 					<h1 className="project-title">XIVDPS.com</h1>
					</div>

 

				</Reveal>
						<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
							<div className="label">Web Application</div>
							<p>Retaining existing customers and re-engaging with pre-qualified potential customers is a cost-effective method of marketing.
							</p>
							 <div className="label">Role</div>
							<p>Design, Front-end, Back-end</p>

						</div>
						<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-1  col-xs-22 col-md-20 col-lg-11">
			 
							<div className="browser-mockup">
								<img src={ projectImage } className=" shadow-2"/>
							</div>

						</div>
 
				<Reveal name="profile-expanded-1" once={ true } activeClass="animated fadeInUp" className="row wrapper-expanded animated-before page-header"> 
					<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
					 	<hr className="hr-thick" />

					</div>
					<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-1 col-xs-22 col-md-20 col-lg-10">
	 					<h1 className="project-title">XIVDPS.com</h1>
					</div>

 

				</Reveal>
						<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
							<div className="label">Web Application</div>
							<p>Retaining existing customers and re-engaging with pre-qualified potential customers is a cost-effective method of marketing.
							</p>
							 <div className="label">Role</div>
							<p>Design, Front-end, Back-end</p>

						</div>
						<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-1  col-xs-22 col-md-20 col-lg-11">
			 
							<div className="browser-mockup">
								<img src={ projectImage } className=" shadow-2"/>
							</div>

						</div>
 			</div>
		</div>
		);
	}
}
 
 
 
export default connect(mapStateToProps, mapDispatchToProps)(Projects)
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ProjectListItem from './ProjectListItem'
import { ScrollLink, Element } from 'react-scrollkit'

function mapStateToProps(state /*, ownProps */) {
  return {
    project: state.Reducer.project,
    toggle: state.Reducer.environment.toggle
  }
}

function mapDispatchToProps(props) {

}



class ProjectList extends React.Component {

	render() {

		let projectNum = this.props.project.length + 1;
		return (
			<div>
 
					{ this.props.project.map( 
		 				item => {
		 					projectNum--;
		 					return (<ProjectListItem key={ projectNum } projectItem={ item }  />);
		 					}
		 				) 
		 			}

				<div className="projects">
					<div className="inner">
						<div className="projects-left">
							<h3>Miscellaneous</h3>
						</div>
						<div className="projects-right">
							<a href="#">Archive</a>
							<p>Projects from the past.</p>
							<br />
							<a href="http://www.github.com/philarr" target="_blank">Github</a><span className="icon linknew"></span>
							<p>Open source projects I'ved started and contributed to.</p>
						</div>
					</div>
		 		</div>
	  
		 	</div>
 		 
		);

	}

}

 
export default connect(mapStateToProps)(ProjectList)
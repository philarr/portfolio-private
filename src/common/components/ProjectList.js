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


	constructor() {
		super();
		this.selectProjectItem = this.selectProjectItem.bind(this);
	}

	selectProjectItem() {


	}


	render() {

		let projectNum = this.props.project.length + 1;
		return (
			<div className="projects-list">
 

				{ 
				this.props.project.map( 
	 				item => {
	 					projectNum--;
	 					return (
	 						<ProjectListItem 
	 						key={ projectNum } 
	 						projectItem={ item } 
	 						selectItem={ this.selectProjectItem }  
	 						/>
	 						);
	 					}
	 				) 
	 			}
 

		 	</div>


 		 
		);

	}

}

 
export default connect(mapStateToProps)(ProjectList)
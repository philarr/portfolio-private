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

			<div className="push-bottom">
					{ this.props.project.map( 
		 				item => {
		 					projectNum--;
		 					return (<ProjectListItem key={ projectNum } projectItem={ item }  />);
		 					}
		 				) 
		 			}
	 		</div>

 		 
		);

	}

}

 
export default connect(mapStateToProps)(ProjectList)
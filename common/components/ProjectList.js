import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Reveal, scroller } from 'react-scroll'
import ProjectListItem from './ProjectListItem'


function mapStateToProps(state /*, ownProps */) {
  return {
    project: state.Reducer.project,
  }
}


class ProjectList extends React.Component {

	render() {

		let projectNum = this.props.project.length + 1;
		return (

		<div className="content-bg wrapper-animated">
			<div className="row">
				<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
					<div className="icon-black arrowdown label">Selected Projects</div>
				</div>
			</div>

				{ this.props.project.map( 
	 				item => {
	 					projectNum--;
	 					return (
	 						<ProjectListItem key={ projectNum } projectItem={ item } />
			 				);
	 					}
	 				) 
	 			}
 

 			</div>
		);

	}

}

 
export default connect(mapStateToProps)(ProjectList)
import React from 'react'
import ProjectListItem from './ProjectListItem'


/* ProjectList 
 *
 * Returns list of available projects by filtering to selectedId,
 * Returns all projects if selectedId is undefined.
 */

ProjectList.propTypes = {
	projects : React.PropTypes.array,
	selectedId: React.PropTypes.string
};

function ProjectList({ projects = [], selectedId, children }) {

	projects = selectedId ? projects.filter( item => (item.uid === selectedId)) : projects;
	let child = (children && selectedId) ? React.cloneElement(children, { backgroundColor: projects[0].color[0] }) : null;

	return (
		<div className="projects-list">
			{ projects.map( item => <ProjectListItem key={ item.uid } projectItem={ item } projectActive={ (item.uid === selectedId) } /> )}

			{ child }
	 	</div>
	);
}


 

ProjectList.displayName = "ProjectList";
export default ProjectList;
import React from 'react'
import Hero from './Hero'
import ProjectList from './ProjectList'
import { Element } from 'react-scrollkit'


 
class Home extends React.Component {

	componentWillReceiveProps(nextProps) {
		console.log('Home => received new props');
	}


	render() {
			return ( 

			<section className="content">
	 			<Hero />
		 		<ProjectList /> 
	 		</section>
 
		);
	}
}
 
 
 
export default Home
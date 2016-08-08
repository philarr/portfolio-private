import React from 'react'
import Hero from './Hero'
import ProjectList from './ProjectList'
import Footer from './Footer'
import { Element } from 'react-scrollkit' 

class Home extends React.Component {

	componentWillReceiveProps(nextProps) {
		console.log('Home => received new props');
	}


	render() {
		return ( 

			<section className="content">
	 			<Hero />
				<Element name="content" className="push-bottom">
		 			<ProjectList /> 
	 	 			<Footer />
		 		</Element>
	 		</section>
 
		);
	}
}
 
 
 
export default Home
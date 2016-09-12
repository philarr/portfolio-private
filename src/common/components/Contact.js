import React from 'react'
import { Reveal, scroller } from 'react-scrollkit'
 
import { Link } from 'react-router'

 
class Contact extends React.Component {

 

	componentDidMount() {
		if (this.props.location.hash == "#expanded") {
			scroller.scrollTo('profile-expanded-1', { smooth: true });
		}
	}

 	componentWillReceiveProps(nextProps) {
 		/*
 		if (nextProps.params.testId !== this.props.params.testId) {
 		 
 		}
 		*/
 	}

	render() {
		return ( 

	 		<section>
	 			<h1>Contact</h1>
			</section>
		);
	}
}
 
 
Contact.displayName = "Contact";
export default Contact;

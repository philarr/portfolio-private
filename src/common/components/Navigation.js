import React from 'react'
import { Link } from 'react-router'

 

class Navigation extends React.Component {

	render() {
		return ( 
			<nav className="nav-primary">
  				<div className="nav-logo"></div>
 				<div className="nav-links">


 					<a href="#">Profile</a>
 					<a href="#">Projects</a>
					<a href="#">Contact</a>
 				</div>
			</nav>
		);
	}
}
 
 
 
export default Navigation
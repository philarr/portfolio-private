import React from 'react'
import { Link } from 'react-router'
import { animateScroll as scroll } from 'react-scrollkit'

class Navigation extends React.Component {

 
 
	render() {
		return ( 
			<div>
				<nav className="nav-primary">
	  				<div className="nav-logo"><a>P&ndash;</a></div>
	 	  			<div className="nav-links">
	 	  				<div className="nav-select"><Link to="/" className="icon work"></Link></div>
	 	  				<div className="nav-select"><Link to="profile" className="icon person"></Link></div>
	 				</div>
				</nav>
	 	 		<div className="nav-top">
 					<a onClick={ scroll.scrollToTop } className="icon up"></a>
 				</div>
 
			</div>
		);
	}
}
 
 
 
export default Navigation
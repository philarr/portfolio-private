import React from 'react'
import { Link } from 'react-router'

 

class Navigation extends React.Component {

	

	render() {
		return ( 
			<header className="row header">
 				<div className="col-sm-offset-2 col-md-offset-3 col-lg-offset-4 col-xs-12 col-sm-10 col-md-10 col-lg-1">
					<Link to="/" className="logo"><div>Pc</div></Link> 
				</div>
 				<div className="col-xs-12 col-sm-10 col-md-10 col-lg-15">
 					<nav className="pull-right">
 						<div className="hidden-xs hidden-sm">
 	 					<Link to="/">Profile</Link>
	 					<Link to="/">Projects</Link>
	 					</div>
	 					 <Link to="/" className="header-menu pull-right visible-xs visible-sm"><div className="icon menu"></div></Link>
					</nav>
				</div>
			</header>
		);
	}
}
 
 
 
export default Navigation
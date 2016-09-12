import React from 'react'
import { Link } from 'react-router'
import { animateScroll as scroll } from 'react-scrollkit'
import { connect } from 'react-redux'


const Navigation = ({ loaded }) => (
		<nav>

				<div className="nav-logo">

				{ loaded ? <Link to="/">P&ndash;</Link> : <div className="loading"></div> }

				</div>
	  			<ul className="nav-links">
	  				<li className="nav-select"><Link to="/" className="icon work">Projects</Link></li>
	  				<li className="nav-select"><Link to="/profile" className="icon person">Profile</Link></li>
	  				<li className="nav-select"><Link to="/contact" className="icon mail">Contact</Link></li>
				</ul>
 
		</nav>
);

Navigation.displayName = "Navigation";
export default connect(state => ({ loaded: state.reduxAsyncConnect.loaded }))(Navigation);
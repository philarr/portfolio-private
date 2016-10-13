import React from 'react'
import { Link } from 'react-router'
import { animateScroll as scroll } from 'react-scrollkit'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu } from '../actions';

const mapProps = (state) =>  ({ 
	menuOpen: state.pmhc.environment.menuOpen,
	loaded: state.reduxAsyncConnect.loaded
});

const mapActions = dispatch => bindActionCreators({ toggleMenu }, dispatch);

class Navigation extends React.Component {
 
	render() {
 
		const { menuOpen, toggleMenu, loaded } = this.props;
		const navClass = menuOpen ? 'active' : null;

		return (
			<nav className={ navClass }>
				<div className="nav-logo">
					{ this.props.loaded ? (
						<span>
							<Link to="/">P&ndash;</Link>
							<a onClick={ toggleMenu }>P<span>&#9776;</span></a>
							<a onClick={ toggleMenu }><span className="icon close"></span></a>
						</span>) : 
						<div className="loading"></div> 
					}
				</div>
 
	  			<ul className="nav-links">
	  				<li><Link to="/" className="icon work">Projects</Link></li>
	  				<li><Link to="/profile" className="icon person">Profile</Link></li>
	  				<li><Link to="/contact" className="icon mail">Contact</Link></li>
				</ul>
			</nav>
		);
	}

}

Navigation.displayName = "Navigation";
export default connect(mapProps, mapActions)(Navigation);

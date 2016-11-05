import React from 'react'
import { Link } from 'react-router'
import { animateScroll as scroll } from 'react-scrollkit'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu, closeMenu } from '../actions';

const mapProps = (state) =>  ({ 
	menuOpen: state.pmhc.environment.menuOpen,
	loaded: state.reduxAsyncConnect.loaded
});

const mapActions = dispatch => bindActionCreators({ toggleMenu, closeMenu }, dispatch);

class Navigation extends React.Component {
 
	render() {
 
		const { 
			menuOpen, 
			toggleMenu, 
			closeMenu, 
			loaded,
			nav,
			phone,
			email,
			linkedin,
			github } = this.props;
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
	  				<h2 className="nav-logo-long">Philip Chung</h2>
	  				<li><Link to="/" onClick={ closeMenu } className="icon work">Projects</Link></li>
 
	  				<li><Link to="/profile" onClick={ closeMenu } className="icon person">Profile</Link></li>
 
					<div className="nav-contact">
						<a href="#" target="_blank">Download résumé <small><div className="icon pdf" /></small></a> 
						<hr />
						<p className="sublabel icon mail"><a href={ 'mailto:' + email }>{ email }</a></p>
						<p className="sublabel icon phone"><a href={ 'tel:' + phone }>{ phone }</a></p>
						<p className="sublabel icon more"><a href={ github }>Github</a> / <a href={ linkedin }>LinkedIn</a></p>
					</div>
				</ul>
			</nav>
		);
	}

}

Navigation.displayName = "Navigation";
export default connect(mapProps, mapActions)(Navigation);

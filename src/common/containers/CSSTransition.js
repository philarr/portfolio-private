import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu } from '../actions';
 

const config = {
	component: 'div',
	transitionName: 'route-change',
	transitionAppear: true,
	transitionAppearTimeout: 400,
	transitionEnterTimeout: 400,
	transitionLeaveTimeout: 400
};
 
const mapProps = (state) => ({
	menuOpen: state.pmhc.environment.menuOpen
});

const mapActions = dispatch => bindActionCreators({ toggleMenu }, dispatch);

const CSSTransition = ({ menuOpen, children, toggleMenu }) => (
	<div className={ menuOpen ? 'main push' : 'main' }>
	
		<div className="menu-overlay" onClick={ toggleMenu } />
		  
			{ children && React.cloneElement(children, { key: children.type.displayName }) }
		 
 
	</div>
);
export default connect(mapProps, mapActions)(CSSTransition);
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Navigation from './Navigation'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Element } from 'react-scrollkit'


/* Load client assets */
require('../assets/css/style.scss');
 


class App extends React.Component 
{

	render() {
		return (
			<div className="main">
				<Element name="top">&nbsp;</Element>
				<Navigation />
				<ReactCSSTransitionGroup
					component="div"
					transitionName="example" 
					transitionAppear={true} 
					transitionAppearTimeout={500} 
					transitionEnterTimeout={500} 
					transitionLeaveTimeout={500}
				>
				{ this.props.children && React.cloneElement(
					this.props.children, { key: this.props.location.pathname }
					)
				}
				</ReactCSSTransitionGroup>
			</div>
		);	
	} 
};


 
export default App;
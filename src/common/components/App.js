import React from 'react'
import { Link } from 'react-router'
import Navigation from './Navigation'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TransitionGroup from 'react-addons-transition-group'



/* Load client assets */
require('../assets/css/style.scss');
 

function mapProps(state) 
{
	return {
		globalLoad: state.reduxAsyncConnect.loaded
	}
}

class App extends React.Component 
{

 
	componentWillReceiveProps(nextProps) 
	{
		if (this.props.globalLoad && !nextProps.globaLoad) 
		{
			console.log('new props');
		}
	}


 

 
	render() 
	{
		return (
			<div className="main">
	 		 
				{ this.props.children && React.cloneElement(this.props.children) }
				 
			</div>

			);	
	} 
};


 
export default withRouter(connect(mapProps)(App));
import React from 'react'
import { Link } from 'react-router'
import Navigation from './Navigation'
import Background from './Background'
import { asyncConnect } from 'redux-connect'
import fetch from 'isomorphic-fetch'

/* Load client assets */
 
	require('../assets/css/style.scss');
 


const mapAsyncToProps =  [{
	key: 'lunch',
	promise: ({ params, helpers }) =>  (fetch('http://www.mocky.io/v2/5756b3070f0000f6192f000e')
      .then(response => response.json())
      .then(json => Promise.resolve(json))
      )
}];


function mapStateToProps(state /*, ownProps */) {
  return {
    loading: state.reduxAsyncConnect.loaded,
  }
}
 
class App extends React.Component {

	componentDidMount() {

	}
 
 
	render() {
		return (
			<div className="main">
				<Navigation />
				{  !this.props.loading ? 'Loading!' : (this.props.children && React.cloneElement(this.props.children /* { ...this.props } if spread, it will overwrite all, so must specify. */))  }
			</div>

			);	
	} 
};


 
export default asyncConnect(mapAsyncToProps, mapStateToProps)(App)
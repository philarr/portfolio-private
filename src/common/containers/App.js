import React from 'react';
import Helmet from 'react-helmet';
import CSSTransition from './CSSTransition';
import Navigation from './Navigation';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import { getMeta } from '../actions';


const mapAsync = [
	{ promise: ({ store: { dispatch }}) => dispatch(getMeta()) }
];

const mapProps = (state) => ({
	meta: state.pmhc.meta
})
 
class App extends React.Component {
 
	componentWillUpdate ({ location: { pathname : nextPath }}) {	
		if (this.props.location.pathname !== nextPath) {
			window.scrollTo(0, 0);
		}
	}
 
	render() {
 
		return ( 
			<div>
				<Helmet defaultTitle="Philip Chung" titleTemplate="%s - Philip Chung" />
				<Navigation { ...this.props.meta } />
				<CSSTransition>
					{ this.props.children }
				</CSSTransition>
			</div>
		);	
	} 
};

App.displayName = "App";
export default asyncConnect(mapAsync, mapProps)(App);

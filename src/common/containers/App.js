import React from 'react';
import Helmet from 'react-helmet';
import CSSTransition from './CSSTransition';
import Navigation from './Navigation';
 
 
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
				<Navigation />
				<CSSTransition>
					{ this.props.children }
				</CSSTransition>
			</div>
		);	
	} 
};

App.displayName = "App";
export default App;
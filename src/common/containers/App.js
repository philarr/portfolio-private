import React from 'react';
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
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Navigation from './Navigation'
 
 
class App extends React.Component {
 
	componentWillUpdate ({ location: { pathname : nextPath }}) {	
		if (this.props.location.pathname !== nextPath) {
			window.scrollTo(0, 0);
		}
	}

	render() {

		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route-change" 
				transitionAppear={true} 
				transitionAppearTimeout={350} 
				transitionEnterTimeout={350} 
				transitionLeaveTimeout={350}
			>
				<Navigation />
 
				{ this.props.children && React.cloneElement(this.props.children, 
					{ 	//using displayName, we want to keep components from unmounting if they are the same.
						//react-router example uses location.pathname, which will unmount any children on route change.
						key: this.props.children.type.displayName 
					}
				)}

			</ReactCSSTransitionGroup>

			 
	
		);	
	} 
};

App.displayName = "App";
export default App;
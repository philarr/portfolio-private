import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import ProjectViewer from '../containers/ProjectViewer'
import Profile from '../containers/Profile'
import Contact from '../containers/Contact'
 
export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ ProjectViewer } />
		<Route path="case/:id" component={ ProjectViewer } />
		<Route path="profile" component={ Profile } />
		<Route path="contact" component={ Contact } />
	</Route>
);
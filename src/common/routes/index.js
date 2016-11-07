/* 
 * PMHC.co Portfolio 2016 
 * Routes
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import ProjectViewer from '../containers/ProjectViewer'
import Profile from '../containers/Profile'
 
export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ ProjectViewer } />
		<Route path="case/:id" component={ ProjectViewer } />
		<Route path="profile" component={ Profile } />
	</Route>
);
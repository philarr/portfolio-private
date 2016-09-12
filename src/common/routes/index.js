import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import IndexFooter from '../components/IndexFooter'
import ProjectViewer from '../components/ProjectViewer'
import ProjectNext from '../components/ProjectNext'
import Profile from '../components/Profile'
import Contact from '../components/Contact'
 

export default (
	<Route path="/" component={ App }>
		<Route component={ ProjectViewer }>
			<IndexRoute component={ IndexFooter } />
			<Route path="case/:id" component={ ProjectNext } />
		</Route>
		<Route path="profile" component={ Profile } />
		<Route path="contact" component={ Contact } />
	</Route>
);
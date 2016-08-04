import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

 


export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ Home } />
		<Route path="projects" component={ Projects } >
			<Route path=":name" component={ Home } />
		</Route>	
		<Route path="profile" component={ Profile } />
		<Route path="contact" component={ Contact } />
	</Route>
);
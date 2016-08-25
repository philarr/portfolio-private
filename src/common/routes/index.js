import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import ProjectList from '../components/ProjectList'
import Hero from '../components/Hero'


export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ Home } />

		<Route path="profile" component={ Profile } />


		<Route component={ Home }>

			<Route path="case/:id" component={ Projects } />
		</Route>

 

	</Route>
);
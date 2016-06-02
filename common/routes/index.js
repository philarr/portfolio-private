import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import Test from '../components/Test'

export default (
	<Route path="/" component={App}>
		<Route path="/test" component={Test} />
	</Route>
);
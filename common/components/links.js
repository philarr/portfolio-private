import React from 'react'
import { Link } from 'react-router'


const Links = (props) => (

	<ul>
		<li><Link to="/test"  style={{color: 'blue'}} activeStyle={{color: 'red'}}>test</Link></li>
		<li><Link to="/" style={{color: 'blue'}} activeStyle={{color: 'red'}}>Home</Link></li>
		<li><Link to="/test2">test2</Link></li>
  	</ul>
 
);


 
export default Links;
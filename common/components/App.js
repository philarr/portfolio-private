import React from 'react'
import { Link } from 'react-router'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

if ( process.env.BROWSER ) {
	require('../styles/style.scss');
}

function mapStateToProps(state) {
  return {
    say: state.say
  }
}
 
 
function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

class App extends React.Component {
   constructor(props) {
      super(props);
    
   } 
	render() {
		return (
		<div>

			 <header className="row header">

				<div className="col-xs-offset-1 col-md-offset-2 col-lg-offset-3 col-xs-18 col-md-10 col-lg-12">
					<h2 className="logo">Philip Chung</h2>
				</div>
				<div className="col-xs-6 col-md-10 col-lg-6">
					<nav className="pull-right">
						<div className="nav-links">
							<span className="hidden-xs">
								<Link to="/test">Profile</Link>
								<a href="#">Projects</a>
								<a href="#">Contact</a>
							</span>
						</div>
					</nav>
				</div>

			</header>


			<div className="main">  


				<section className="row content">
		 
					<div  className="wrapper">
						<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-3 col-xs-22 col-md-20 col-lg-4">
							<h4 className="label">&mdash; A little about me</h4>
						</div>
						<div  className="col-xs-offset-1 col-xs-22 col-lg-10">
							<h2  className="message-big">
								<em>Front-end developer</em> who enjoys crafting responsive websites and experimenting with different web technologies.
								Currently using <em>React</em>.
							</h2>
							<br />

							<Link to="/test" className="icon arrowdown">Read more about me</Link>
							<Link to="/" className="icon close pull-right">Close Message</Link>
	 














	 
							{this.props.children}
						</div>


					</div>
	 
	  
				</section>

	  

			</div>
		</div>
			);
	} 
};


 
export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react'
import { Link } from 'react-router'

/* client asset */
if ( process.env.CanUseDom ) {
	require('particles-js/particles.js');
}

/* hero background + text */
class Hero extends React.Component {

	componentDidMount() {
		particlesJS.load('hero-particle', '/static/particles.json');
	}
	render() {
		return (
		<div>
	 		<div id="hero-particle"></div>
			<div className="row hero">
				<div className="hero-vwrapper">
					<div className="col-xs-offset-1 col-sm-offset-2 col-md-offset-1 col-lg-offset-4">
						<div className="row">
							<div  className="col-xs-5 col-sm-3 col-md-1">
								<div className="icon-wave"></div> 
							</div>
							<div  className="col-xs-offset-1 col-xs-15 col-sm-17 col-md-3 col-lg-3">
								<hr className="hr-thick" />
							</div>
							<div  className="col-md-offset-1 col-xs-22 col-sm-24 col-md-16 col-lg-13">
								<div className="hero-msg">
									<span><span>Hi. I'm Philip Chung, front-end developer</span></span>
									<span><span>based in Vancouver, BC. I enjoy creating</span></span>
									<span><span>responsive solutions for the web.</span></span>
								</div>
								<Link to= {{ pathname:'/profile', hash:'#expanded' }} className="icon person home-select">Read more about me</Link>
								<Link to="/contact" className="icon mail home-select">Get in touch!</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}


export default Hero
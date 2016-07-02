import React from 'react'

if ( process.env.BROWSER ) {
	require('particles-js/particles.js');
}


class Background extends React.Component {
	componentDidMount() {
 
		//particlesJS.load('particles-js', '/static/particles.json');
	}

	render() {
		return ( 
			<div className="background-wrapper">
					<div id="particles-js"></div>
					<div className="overlay">
						<div className="primary-bg"></div>
				 		<div className="secondary-bg"></div>
					</div>
			</div>
		);
	}
}
 
 
 
export default Background
import React from 'react'
import { Link } from 'react-router'

/* client asset */
if ( process.env.CanUseDom ) {
 
		require('particles.js/particles.js');
 
}

/* hero background + text */
class Hero extends React.Component {

	componentDidMount() {
 
	//	particlesJS.load('hero-particle', '/static/particles.json');
		particlesJS('hero-particle',

			{
			  "particles": {
			    "number": {
			      "value": 65,
			      "density": {
			        "enable": true,
			        "value_area": 300
			      }
			    },
			    "color": {
			      "value": "#A0A0A0"
			    },
			    "shape": {
			      "type": "circle",
			      "stroke": {
			        "width": 0,
			        "color": "#A0A0A0"
			      },
			      "polygon": {
			        "nb_sides": 1
			      },
			    },
			    "opacity": {
			      "value": 0.5,
			      "random": true,
			      "anim": {
			        "enable": false,
			        "speed": 1,
			        "opacity_min": 0.1,
			        "sync": false
			      }
			    },
			    "size": {
			      "value": 2,
			      "random": true,
			      "anim": {
			        "enable": false,
			        "speed": 40,  
			        "size_min": 0.1,
			        "sync": true
			      }
			    },
			    "line_linked": {
			      "enable": false,
			      "distance": 50,
			      "color": "#A0A0A0",
			      "opacity": 0.4,
			      "width": 1
			    },
			    "move": {
			      "enable": true,
			      "speed": 0.5,
			      "direction": "right",
			      "random": true,
			      "straight": true,
			      "out_mode": "out",
			      "bounce": false,
			      "attract": {
			        "enable": false,
			        "rotateX": 600,
			        "rotateY": 1200
			      }
			    }
			  },
			  "interactivity": {
			    "detect_on": "canvas",
			    "events": {
			      "onresize": {

			        "enable": true,
			        "density_auto": true,
			        "density_area": 400
			      },
			      "onhover": {
			        "enable": false,
			        "mode": "repulse"
			      },
			      "onclick": {
			        "enable": false,
			        "mode": "push"
			      },
			      "resize": true
			    },
			    "modes": {
			      "grab": {
			        "distance": 400,
			        "line_linked": {
			          "opacity": 1
			        }
			      },
			      "bubble": {
			        "distance": 400,
			        "size": 40,
			        "duration": 2,
			        "opacity": 8,
			        "speed": 3
			      },
			      "repulse": {
			        "distance": 200,
			        "duration": 0.4
			      },
			      "push": {
			        "particles_nb": 4
			      },
			      "remove": {
			        "particles_nb": 2
			      }
			    }
			  },
			  "retina_detect": true
			}

		);
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
									<span><span>Hi! I'm Philip Chung.</span></span>
									<span><span>Front-end developer based in Vancouver, BC.</span></span>
									<span><span>I enjoy creating responsive solutions for the web.</span></span>
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
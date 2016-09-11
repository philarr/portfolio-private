import React from 'react'
import { Link } from 'react-router'
import { ScrollLink } from 'react-scrollkit'

let particles, parallax, particlesJSON;

/* client asset */
if ( process.env.CanUseDom ) {
	particles = require('particles.js');
	parallax = require('../assets/vendor/parallax.js');
	particlesJSON = require('../assets/json/particles.json');
}

/* hero background + text */
class Hero extends React.Component {

 	constructor() {
 		super();
 		this.parallax = null;
 		this.debounce = null;
 		this.setSize = this.setSize.bind(this);
 		this.screenWidth = 0;
 		this.screenHeight = 0;
 		this.isMobile = false;
 	}

	componentDidMount() {
   		this.isMobile = isMobile();
 		this.parallax = new Parallax(this.refs.heroScene, {
 			listenTo: this.refs.heroWrapper,
 			relativeInput: true,
 			clipRelativeInput: true,
 			limitX: 100,
 			limitY: 100
 		});
		this.setSize();
  		window.addEventListener('resize', this.setSize);
		particlesJS('hero-particle', particlesJSON);
	}
	

	setSize() {
  		if (this.debounce) clearTimeout(this.debounce);

  		const { innerWidth: w, innerHeight: h } = window;
 
  		//ios/mobile scroll resize check
  		if (this.isMobile && (w === this.screenWidth)) {
  			console.log('ismobile')
  			return;
  		}

		this.debounce = setTimeout(()=> {
			let { heroBg, heroExtra, heroParticle } = this.refs;
			this.screenWidth = w;
			this.screenHeight = h;
			heroBg.style.width = (w + 150) + 'px';
			heroBg.style.height = (h + 150) + 'px';
			heroExtra.style.width = (w + 150) + 'px';
			heroParticle.style.width = (w + 150) + 'px';
			heroParticle.style.height = ((h * 0.33) + 150) + 'px';
		}, 150);
	 

 
	}
	

	componentWillUnmount() {
		if (this.parallax) this.parallax.disable();
		window.removeEventListener('resize', this.setSize);
	}


	render() {
		return (
			<div className="hero">
				<div ref="heroCanvas" id="hero-canvas">
					<div ref="heroScene" id="scene">
		 				<div className="layer hero-bg" ref="heroBg" data-depth="0.20" />
			 	 		<div className="layer" id="hero-particle" ref="heroParticle" data-depth="0.20" />
						<div ref="heroText"  className="layer hero-text" data-depth="0.35">
							<div className="hero-text-left">P&ndash;</div>
						</div>
						<div className="layer hero-grid" data-depth="0" />
						<div className="layer hero-extra" ref="heroExtra" data-depth="0.5" />
					</div>
				</div>	
				<div ref="heroWrapper" className="hero-wrapper">
					<div className="inner">
						<div className="hero-msg"><span><span>Hi &mdash; I'm Philip Chung.</span></span><span><span>I create digital solutions.</span></span></div>	  

					</div>
					<div className="hero-bottom">
		 
						<ScrollLink to="content" smooth={ true } className="icon down" onClick={ this.doStuff } />
					</div>
				</div>
			</div>
		);
	}
}

Hero.displayName = "Hero";
export default Hero


function isMobile() { 
	return (/(iPad|iPhone|iPod|Android|BlackBerry|Opera Mini|IEMobile)/g.test(navigator.userAgent));
};


 
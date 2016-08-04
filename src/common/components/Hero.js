import React from 'react'
import { Link } from 'react-router'

/* client asset */
if ( process.env.CanUseDom ) {
	var particles = require('particles.js');
	var parallax = require('../assets/vendor/parallax.js');
}


/* hero background + text */
class Hero extends React.Component {

 	constructor() {
 		super();
 		this.parallax = null;
 	}


	componentDidMount() {
     
 
 		this.parallax = new Parallax(this.refs.heroScene, {
 			clipRelativeInput: false,
 			limitX: 100,
 			limitY: 100
 		});


 		var scrolling = false;
 		var debounce = null;
 		var scrollDebounce = null;

 		window.addEventListener('touchmove', () => {

 			scrolling = true;

 			if (scrollDebounce) clearTimeout(scrollDebounce);

 			scrollDebounce = setTimeout(() => {
 				scrolling = false;
 			}, 100)
 		});

  		window.addEventListener('resize', () => {
  			if (scrolling) return;
  			if (debounce) clearTimeout(debounce);
  			debounce = setTimeout(this.setSceneSize.bind(this), 150);
  		});

		this.setSceneSize();

  		particlesJS('hero-particle', require('../assets/json/particles.json'));

	}
	



	setSceneSize() {

		const width = window.innerWidth, height = window.innerHeight;

		this.refs.heroCanvas.style.width = (width + 100) + 'px';
		this.refs.heroCanvas.style.height = (height + 100) + 'px';
		this.refs.heroParticle.style.width = (width + 100) + 'px';
		this.refs.heroParticle.style.height = ((height*0.33) + 100) + 'px';
	}
	

	componentWillUnmount() {
		if (this.parallax) this.parallax.disable();
	}


	render() {
		return (
			<div className="hero">
				<div ref="heroCanvas" id="hero-canvas" >
					<div ref="heroScene" id="scene">
		 				<div className="layer hero-bg" data-depth="0.20" />
			 	 		<div className="layer" id="hero-particle" ref="heroParticle" data-depth="0.20" />
						<div ref="heroText"  className="layer hero-text" data-depth="0.35">
							<div className="hero-text-left">P&ndash;</div>
						</div>
						<div className="layer hero-grid" data-depth="0" />
						<div className="layer hero-extra" ref="heroExtra" data-depth="0.5" />
					</div>
				</div>	
				<div className="hero-wrapper">
					<div className="inner">
						<div className="hero-msg"><span><span>Hi &mdash; I'm Philip Chung.</span></span><span><span>I create digital solutions.</span></span></div>	  
 
					</div>
					<div className="hero-bottom">
						<span>Selected Projects</span>
						<a href="/projects" className="icon down" onClick={ this.doStuff } />
					</div>
				</div>
			</div>
		);
	}
}

export default Hero


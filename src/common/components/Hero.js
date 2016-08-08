import React from 'react'
import { Link } from 'react-router'
import { ScrollLink } from 'react-scrollkit'

/* client asset */
if ( process.env.CanUseDom ) {
	var particles = require('particles.js');
	var parallax = require('../assets/vendor/parallax.js');
	var particlesJSON = require('../assets/json/particles.json');
}

/* hero background + text */
class Hero extends React.Component {

 	constructor() {
 		super();
 		this.parallax = null;
 		this.debounce = null;
 		this.setSceneSize = this.setSceneSize.bind(this);
 	}

	componentDidMount() {
   
 		this.parallax = new Parallax(this.refs.heroScene, {
 			limitX: 100,
 			limitY: 100
 		});
		this.setSceneSize();
  		window.addEventListener('resize', this.setSceneSize, 150);
		particlesJS('hero-particle', particlesJSON);
	}
	

	setSceneSize() {
  		if (this.debounce) clearTimeout(this.debounce);

  		this.debounce = setTimeout(()=> {
			const width = window.innerWidth, height = window.innerHeight;
			this.refs.heroBg.style.width = (width + 150) + 'px';
			this.refs.heroBg.style.height = (height + 150) + 'px';
			this.refs.heroExtra.style.width = (width + 150) + 'px';
			this.refs.heroParticle.style.width = (width + 150) + 'px';
			this.refs.heroParticle.style.height = ((height*0.33) + 150) + 'px';
  		}, 150);
	}
	

	componentWillUnmount() {
		if (this.parallax) this.parallax.disable();
		window.removeEventListener('resize', this.setSceneSize);
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
				<div className="hero-wrapper">
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

export default Hero


import React from 'react';
import { Link } from 'react-router';
import { ScrollLink } from 'react-scrollkit';
import { isMobile, preloadImages } from '../utils';

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
        this.state = {
            loaded: false
        }
        this.parallax = null;
        this.debounce = null;
        this.checkResize = this.checkResize.bind(this);
        this.screenWidth = 0;
        this.isMobile = false;
        this.heroImages = ['http://pmhc.co/images/mountain_night.jpg', 'http://pmhc.co/images/trees_night.png'];
    }

    componentDidMount() {
        this.isMobile = isMobile();
        this.setSize();

        preloadImages(this.heroImages).then(() => {

            window.addEventListener('resize', this.checkResize);
            particlesJS('hero-particle', particlesJSON);
            this.refs.heroBg.style.backgroundImage = 'url('+ this.heroImages[0] + ')';
            this.refs.heroExtra.style.backgroundImage = 'url(' + this.heroImages[1] + ')';
            this.parallax = new Parallax(this.refs.heroScene, {
                listenTo: this.refs.heroWrapper,
                relativeInput: true,
                clipRelativeInput: true,
                limitX: 100,
                limitY: 100
            });
            setTimeout(() => { this.setState({ loaded: true }) }, 50);

        })
    }
    
    checkResize() {
        const { innerWidth } = window;
        if (this.debounce) clearTimeout(this.debounce);
        if (this.isMobile && (innerWidth === this.screenWidth)) {
            return;
        }
        this.debounce = setTimeout(()=> {
            this.setSize()
        }, 150);
    }

    setSize() {
        const { innerWidth: w, innerHeight: h } = window;
        let { heroBg, heroExtra, heroParticle } = this.refs;
        this.screenWidth = w;
        heroBg.style.width = (w + 150) + 'px';
        heroBg.style.height = (h + 150) + 'px';
        heroExtra.style.width = (w + 150) + 'px';
        heroParticle.style.width = (w + 150) + 'px';
        heroParticle.style.height = ((h * 0.33) + 150) + 'px';
    }    

    componentWillUnmount() {
        if (this.parallax) this.parallax.disable();
        window.removeEventListener('resize', this.checkResize);
    }

    render() {

        let heroClass = this.state.loaded ? 'hero active' : 'hero';

        return (
            <div className={ heroClass }>
                <div ref="heroCanvas" id="hero-canvas">
                    <div ref="heroScene" id="scene">
                        <div className="layer hero-bg" ref="heroBg" data-depth="0.20" />
                        <div className="layer" id="hero-particle" ref="heroParticle" data-depth="0.20" />
                        <div className="layer hero-text" ref="heroText" data-depth="0.35">
                            <div className="hero-text-left">P&ndash;</div>
                        </div>
                        <div className="layer hero-grid" data-depth="0" />
                        <div className="layer hero-extra" ref="heroExtra" data-depth="0.5" />
                    </div>
                </div>  
                <div ref="heroWrapper" className="hero-wrapper">
                    <div className="inner">
                        <div className="hero-msg"><span>Hi &mdash; I'm Philip Chung.</span><span>I create digital solutions.</span></div>   
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

 
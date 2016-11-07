import React from 'react';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import { getProfile } from '../actions';
import ProfileList from '../components/ProfileList';
import TextFormat from '../components/TextFormat';
import GoogleMaps from '../utils/GoogleMapsInstance';
import GoogleMapsStyle from '../assets/vendor/GoogleMapsStyle';
import { isMobile, formatTime, isDST } from '../utils';
 
const mapAsync = [
	{ promise: ({ store: { dispatch }}) => dispatch(getProfile()) }
];
 
const mapProps = ({ pmhc: { meta, profile }}) =>  ({ 
	meta,
	profile
});

class Profile extends React.Component {

	constructor(props) {

		super(props);
		this.timer = false;
		
		const date = new Date();

		this.runClock = this.runClock.bind(this, isDST() ? 
			this.props.profile.mapOption.utc - 1 : 
			this.props.profile.mapOption.utc
		);
 
	}

	runClock(utc) {
		if (this.timer) {
			const date = new Date();
			this.refs.clock.innerHTML = formatTime(utc
			);
			setTimeout(this.runClock, 500);
		}
	}

 	componentDidMount() {

 		this.timer = true;
 		this.runClock();

		GoogleMaps({ 
			...this.props.profile.mapOption, 
		    zoom: 11,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		    draggable: false,
		    scrollwheel: false,
		    disableDefaultUI: true,
		    styles: GoogleMapsStyle
		}).then( ({ dom, geo }) => {
			const { mapNode, location } = this.refs;
			mapNode.appendChild(dom);
	 		location.innerHTML = `${geo[2].address_components[1].short_name}, ${geo[2].address_components[3].short_name}`;
			google.maps.event.trigger(mapNode.children[0], 'resize');
		});
	}


	componentWillUnmount() {
		this.timer = false;
	}

	render() {

		const { meta, profile } = this.props;

		return (
			<div>
				<Helmet title={ Profile.displayName } />
		 		<section >
			 		<div className="profile-animate-wrapper">
						<div className="profile-bg" />
			 		</div>
					<div className="profile-grid"/>
					<div className="profile-me" />
	 				<div className="profile-title">
						<div className="inner">
							<div className="left">&nbsp;</div>
							<div className="right">
								<h1 className="label">
									{ profile.title }
								</h1>
							</div>
						</div>
	 				</div>

					<div className="profile">
						<div className="inner">
							<div className="left">
								<h3 className="label">My Profile</h3>
							</div>
							<div className="right">
								<TextFormat>
									{ profile.aboutme }
								</TextFormat>
							</div>
						</div>

						<div className="inner">
							<div className="left">
								<h3 className="label">Languages & Frameworks</h3>
							</div>
							<div className="right">
								{ profile.skill.map((item, idx) => <ProfileList key={ idx } list={ item } />) }
							</div>
						</div>
 


		 				<div className="inner">
							<div className="left">
								<h3 className="label">Get in touch!</h3>
			 
							</div>
							<div className="right">
								<p>If you have any questions or opportunities for me, you can reach me via the following methods.</p>
								<div className="profile-contact">
									<small className="mail icon">E-MAIL</small>
									<a href={ 'mailto:' + meta.email }>{ meta.email }</a>
								</div>
								<div className="profile-contact">
									<small className="phone icon">PHONE</small>
									<p className="label">{ meta.phone }</p>
								</div>
								<div className="profile-contact">
									<small className="more icon">OTHER</small>
									<a href={ meta.github } target="_blank">Github</a>&nbsp;/&nbsp;
									<a href={ meta.linkedin } target="_blank">LinkedIn</a>

								</div>					
							</div>
						</div>
			 		</div>
				</section>
	 			<div className="profile-map project-next">
	 				<div className="project-next-wrapper">
	   					<div ref="mapNode" className="profile-maps" />
	 					<div className="profile-overlay" />
					<div className="inner">
						<div className="left">
							<h3 className="label">My location</h3>
						</div>
						<div className="right">

		 					<h1 ref="location" className="label">Unknown</h1>
		 					<p ref="clock" className="icon clock">00:00:00 AM</p>
						</div>
					</div>
				</div>
		 		</div>
			</div>

		);



	}

}


 
Profile.displayName = "Profile";
export default asyncConnect(mapAsync, mapProps)(Profile);

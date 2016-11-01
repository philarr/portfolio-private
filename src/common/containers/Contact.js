import React from 'react';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import { Reveal, scroller } from 'react-scrollkit';
import { getContact } from '../actions';
import GoogleMaps from '../utils/GoogleMapsInstance';
import GoogleMapsStyle from '../assets/vendor/GoogleMapsStyle';
import { isMobile } from '../utils';

const mapAsync = [
	{ promise: ({ store: { dispatch }}) => dispatch(getContact()) },
];
 
const mapProps = ({ pmhc: { meta, contact }}) =>  ({ 
	meta,
	contact
});

class Contact extends React.Component {
 
	componentDidMount() {
		GoogleMaps({ 
			...this.props.contact.mapOption, 
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
	 		
			if (!isMobile()) google.maps.event.trigger(mapNode.children[0], 'resize');
			 
		});
	}

	render() {

		const { meta: { github, linkedin, twitter, email }, contact } = this.props;
 
		return (
	 		<section className="no-margin">
				<Helmet title="Contact" />
 
 

					<div className="contact-header">
  					<div ref="mapNode" className="contact-maps" />
 					<div className="contact-overlay" />

					<div className="inner">					 
 
	 
						<div className="right">

							<div className="contact-push">
				 
							</div>

								<h1 className="label">
								{ contact.title }
								</h1>	

 							<div className="contact-method">
								<p><small className="mail icon">E-MAIL &mdash;</small></p>
								<a href={ 'mailto:' + email }>{ email }</a>
					 		</div>
							<div className="contact-method">
								<p><small className="phone icon">PHONE &mdash;</small></p>
								<p className="label">{ contact.phone }</p>
							</div>
							<div className="contact-method">
								<p><small className="more icon">OTHER &mdash;</small></p>
			 					<a href={ github } target="_blank">Github</a>&nbsp;/&nbsp;
								<a href={ linkedin } target="_blank">LinkedIn</a>&nbsp;/&nbsp;
								<a href={ twitter } target="_blank">Twitter</a>
							</div>
 



						</div>
	 			 		<div className="left">
		 					<h3>My current location</h3>
		 					<h3 className="label">Vancouver, BC</h3>
		 					<h3>10:32 pm</h3>
 

				 		</div>
					</div>




				</div>
 
 
 
 
			</section>
		);

	}
 
}

Contact.displayName = "Contact";
export default asyncConnect(mapAsync, mapProps)(Contact);

 

 
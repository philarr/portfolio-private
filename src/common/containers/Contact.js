import React from 'react';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import { Reveal, scroller } from 'react-scrollkit';
import { getContact } from '../actions';
import GoogleMaps from '../utils/GoogleMapsInstance';

 
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
		    disableDefaultUI: true
		}).then((map) => {
			const { mapNode } = this.refs;
			mapNode.appendChild(map);
			google.maps.event.trigger(mapNode.children[0], 'resize');
		});
	}

	render() {

		const { meta: { github, linkedin, twitter, email }, contact } = this.props;
 
		return (
	 		<section>
				<Helmet title="Contact" />
		 		<div ref="mapNode" className="contact-maps" />
  				<div className="contact-content">
					<div className="inner">
						<div className="left">
 				 
						</div>
						<div className="right">
		 					<h1 className="label">
								{ contact.title }
							</h1>
							<div className="contact-method">
								<p><small className="mail icon">E-MAIL &mdash;</small></p>
								<a href={ 'mailto:' + email }>{ email }</a>
							</div>
							<div className="contact-method">
								<p><small className="phone icon">PHONE &mdash;</small></p>
								<a href="#">{ contact.phone }</a>
							</div>
							<div className="contact-method">
								<p><small className="more icon">OTHER &mdash;</small></p>
			 					<a href={ github } target="_blank">Github</a>&nbsp;/&nbsp;
								<a href={ linkedin } target="_blank">LinkedIn</a>&nbsp;/&nbsp;
								<a href={ twitter } target="_blank">Twitter</a>
							</div>
						</div>
					</div>
  				</div>
			</section>
		);

	}
 
}
 
Contact.displayName = "Contact";
export default asyncConnect(mapAsync, mapProps)(Contact);

 

 
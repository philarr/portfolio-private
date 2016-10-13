import React from 'react';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import { Reveal, scroller } from 'react-scrollkit';
import { getContact } from '../actions';
import GoogleMaps from '../utils/GoogleMapsInstance';

 
const mapAsync = [
	{ promise: ({ store: { dispatch }}) => dispatch(getContact()) },
];
 
const mapProps = (state) =>  ({ 
	contact: state.pmhc.contact
});

class Contact extends React.Component {
 
	componentDidMount() {
 
		GoogleMaps({
			key: 'AIzaSyD1XSn4mO0TXODHhJ8epGNhU_WQ4koQYUY',
		    zoom: 10,
		    disableDefaultUI: true,
			location: this.props.contact.map
		}).then((map) => {
			this.refs.map.appendChild(map);
			google.maps.event.trigger(this.refs.map.children[0], 'resize');
		});
	}
 

	render() {

		const { contact } = this.props;
 
		return (
	 		<section>
		 		<div ref="map" className="contact-maps" />
  				<div className="contact-content">
					<div className="inner">
						<div className="left">
 
						</div>
						<div className="right">
		 					<h1 className="label">
								If you have any questions or opportunities for me, you can reach me via the following methods.
							</h1>
							<div className="contact-method">
								<p><small className="mail icon">E-MAIL &mdash;</small></p>
								<a href="#">contact@pmhc.co</a>
							</div>
							<div className="contact-method">
								<p><small className="phone icon">PHONE &mdash;</small></p>
								<a href="#">+1 555 5555</a>
							</div>
							<div className="contact-method">
								<p><small className="more icon">OTHER &mdash;</small></p>
								<a href="#">Github</a> / <a href="#">LinkedIn</a>
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

 

 
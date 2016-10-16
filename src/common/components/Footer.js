import React from 'react';

const Footer = ({ meta: { email, github, linkedin, twitter } }) => (
	<footer>
		<div className="footer-wrapper">
			<div className="inner">
				<div className="footer-left">
					<a href={ 'mailto:' + email } className="icon mail">{ email }</a>
	 			</div>
 				<div className="footer-right">
 					<a href={ github } target="_blank">Github</a> /
					<a href={ linkedin } target="_blank">LinkedIn</a> /
					<a href={ twitter } target="_blank">Twitter</a>
					 
 				</div>
	 		</div>
	 	</div>
 	</footer>
);

Footer.displayName = "Footer";
export default Footer
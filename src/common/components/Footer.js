import React from 'react';

const Footer = ({ email, github, linkedin, twitter, phone }) => (
	<footer>
		<div className="footer-wrapper">
			<div className="inner">
				<div className="left">
 					<p><a href="#" target="_blank">My résumé <small className="icon pdf" /></a></p>
	 			</div>
 				<div className="right">
					<p className="icon mail"><a href={ 'mailto:' + email }>{ email }</a></p>
					<p className="icon phone label">{ phone }</p>
 					<p className="icon more">
	 					<a href={ github } target="_blank">Github</a>&nbsp;/&nbsp;
						<a href={ linkedin } target="_blank">LinkedIn</a> 
					</p>
 				</div>
	 		</div>
	 	</div>
 	</footer>
);

Footer.displayName = "Footer";
export default Footer
import React from 'react'

class Footer extends React.Component {



	render() {



		return (	


		<footer>

				{ this.props.children }	 	 
 
					<div className="inner">
				 
						<div className="footer-left">
							<h4 href="mailto:contact@pmhc.co" className="icon mail">contact@pmhc.co</h4>
			 			</div>
		 				<div className="footer-right">
	 						<a href="https://ca.linkedin.com/in/philip-chung-6955b7106" target="_blank">LinkedIn</a>
	 						&mdash;
	 						<a href="https://twitter.com/pmhc_" target="_blank">Twitter</a>
	 						&mdash;
	 						<a href="http://www.instagram.com/pmhc_" target="_blank">Instagram</a>
	 					
		 				</div>
			 		</div>
		 	 
	 	 
		 	</footer>

		);
	}
}

Footer.displayName = "Footer";
export default Footer
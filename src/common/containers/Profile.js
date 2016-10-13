import React from 'react';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import { Reveal, scroller } from 'react-scrollkit';
import { getProfile } from '../actions';
import Footer from '../components/Footer';


const mapAsync = [
	{ promise: ({ store: { dispatch }}) => dispatch(getProfile()) },
];
 
const mapProps = (state) =>  ({ 
	profile: state.pmhc.profile
});

const Profile = ({ profile }) => {
 
		return ( 
		<div>
	 		<section>
 				<div className="profile-header">
					<div className="inner">
						<div className="left">
 
						</div>
						<div className="right">
		 					<h1 className="label">
		 						Being self-taught has given me the opportunity to work on projects from the perspective of different roles.

							</h1>
						</div>
					</div>
		 		</div>
 				<div className="profile">
					<div className="inner">
						<div className="left">
							<div className="label">About me</div>
						</div>
						<div className="right">
							<p>
								My passion for developing websites started since the days of geocities/homestead drag and drop. Unsatisfied with the limitations
								of the interface and customization features, I dived into HTML, picking up CSS/PHP/MySQL over the years. Since then I've
								grown interested in how new web technologies are incorporated in some of the most visited websites.
								As the web has become increasingly fast paced with new frameworks and standards released every year, I have recognized the importance of humility and 
								geniune interest in this field to succeed. I'm always learning!
							</p>
							<p>
								I am currently an Interactive Arts (B.Sc) student at Simon Fraser University.
							</p>
						</div>
					</div>
					<div className="inner">
						<div className="left">
							<div className="label">I have worked with</div>
						</div>
						<div className="right">
							<div className="profile-list">
							 	<p><small className="icon frontend">FRONT-END</small></p>
							 	<ul>
							 		<li>HTML</li>
							 		<li>CSS (Sass)</li>
							 		<li>Javascript (ES6)</li>
							 		<li>React</li>
							 		<li>jQuery</li>
							 	</ul>
		 					</div>
							<div className="profile-list">
								<p><small className="icon server">BACK-END</small></p>
							 	<ul>
							 		<li>PHP</li>
							 		<li>Node.js</li>
							 		<li>MySQL</li>
							 		<li>Redis</li>
							 	</ul>
		 					</div>

							<div className="profile-list">
								<p><small className="icon desktop">DESKTOP</small></p>
							 	<ul>
							 		<li>C#.NET</li>
							 		<li>Visual Basic</li>
							 		<li>Processing</li>
							 	</ul>
		 					</div>
							<div className="profile-list">
								<p><small className="icon tools">TOOLS</small></p>
					 			<ul>
							 		<li>Git</li>
							 		<li>npm</li>
							 		<li>Webpack</li>
							 		<li>Apache, Nginx</li>
							 	</ul>

		 					</div>
						</div>
					</div>
		 		</div>
			</section>
			<Footer />
		</div>
		);
	 

};
 
 
Profile.displayName = "Profile";
export default asyncConnect(mapAsync, mapProps)(Profile);

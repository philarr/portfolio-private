import React from 'react';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import { Reveal, scroller } from 'react-scrollkit';
import { getProfile } from '../actions';
import IndexFooter from '../components/IndexFooter';
import TextFormat from '../components/TextFormat';
import Footer from '../components/Footer';


const mapAsync = [
	{ promise: ({ store: { dispatch }}) => dispatch(getProfile()) },
];
 
const mapProps = ({ pmhc: { meta, profile }}) =>  ({ 
	meta,
	profile
});

const Profile = ({ meta, profile }) => {
 
		return ( 
		<div>
	 		<section>
 				<div className="profile-header">
					<div className="inner">
						<div className="left">
 
						</div>
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
							<h3 className="label">About me</h3>
						</div>
						<div className="right">
							<TextFormat>
								My passion for developing websites started since the days of geocities/homestead drag and drop. Unsatisfied with the limitations
								of the interface and customization features, I dived into HTML, picking up CSS/PHP/MySQL over the years. Since then I've
								grown interested in how new web technologies are incorporated in some of the most visited websites.
								As the web has become increasingly fast paced with new frameworks and standards released every year, I have recognized the importance of humility and 
								geniune interest in this field to succeed. I'm always learning!
 								\n
								I am currently an Interactive Arts (B.Sc) student at Simon Fraser University.
							</TextFormat>
							 
						</div>
					</div>
					<div className="inner">
						<div className="left">
							<h3 className="label">I have worked with</h3>
						</div>
						<div className="right">
							<div className="profile-list">
							 	<p><small className="icon frontend">FRONT-END</small></p>
							 	<ul>
							 		<li>HTML</li>
							 		<li>CSS (Sass)</li>
							 		<li>Bootstrap</li>
							 		<li>Javascript (ES6)</li>
							 		<li>React</li>
							 		<li>jQuery</li>
							 	</ul>
		 					</div>
							<div className="profile-list">
								<p><small className="icon server">BACK-END</small></p>
							 	<ul>
							 		 
							 		<li>Node.js</li>
							 		<li>MySQL</li>
							 		<li>PHP</li>
							 		<li>Redis</li>
							 		<li>Apache</li>
							 		<li>Nginx</li>
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
								<p><small className="icon tools">WORKFLOW</small></p>
					 			<ul>
							 		<li>Git</li>
							 		<li>npm</li>
							 		<li>Webpack</li>
							 		<li>PostCSS</li>
							 	</ul>

		 					</div>
						</div>
					</div>
		 		</div>
			</section>
			<IndexFooter />
			<Footer meta={ meta } />
		</div>
		);
	 

};
 
 
Profile.displayName = "Profile";
export default asyncConnect(mapAsync, mapProps)(Profile);

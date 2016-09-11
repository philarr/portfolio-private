import React from 'react';
import Footer from './Footer'
import { Reveal, scroller } from 'react-scrollkit';


 /*
if ( process.env.CanUseDom ) {
	var instagramIcon = require('../assets/img/instagram.png');
 	var githubIcon = require('../assets/img/github-32.png');
 	var twitterDataURI = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNzIgNzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcyIDcyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHg9IjAiIGZpbGw9Im5vbmUiIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIvPg0KPHBhdGggZmlsbD0iIzU1YWNlZSIgZD0iTTY4LjgxMiwxNS4xNDFjLTIuMzQ4LDEuMDM5LTQuODY5LDEuNzQzLTcuNTE5LDIuMDZjMi43MDMtMS42Miw0Ljc3OC00LjE4Nyw1Ljc1Ni03LjI0NGMtMi41MjksMS41LTUuMzMsMi41OTItOC4zMTMsMy4xNzYNCglDNTYuMzQ5LDEwLjU5MSw1Mi45NDgsOSw0OS4xODIsOWMtNy4yMjksMC0xMy4wOTIsNS44NjEtMTMuMDkyLDEzLjA5M2MwLDEuMDI2LDAuMTE4LDIuMDIxLDAuMzM4LDIuOTgxDQoJYy0xMC44ODUtMC41NDgtMjAuNTI4LTUuNzU3LTI2Ljk4Ny0xMy42NzljLTEuMTI2LDEuOTM2LTEuNzcxLDQuMTg0LTEuNzcxLDYuNTgxYzAsNC41NDIsMi4zMTIsOC41NTEsNS44MjQsMTAuODk4DQoJYy0yLjE0Ni0wLjA2OS00LjE2NS0wLjY1Ny01LjkzLTEuNjM4Yy0wLjAwMiwwLjA1NS0wLjAwMiwwLjExLTAuMDAyLDAuMTYyYzAsNi4zNDUsNC41MTMsMTEuNjM4LDEwLjUwNCwxMi44NA0KCWMtMS4xMDEsMC4yOTgtMi4yNTYsMC40NTctMy40NDksMC40NTdjLTAuODQ2LDAtMS42NjctMC4wNzgtMi40NjUtMC4yMzFjMS42NjcsNS4yLDYuNDk5LDguOTg2LDEyLjIzLDkuMDkNCgljLTQuNDgyLDMuNTEyLTEwLjEyOSw1LjYwNi0xNi4yNiw1LjYwNmMtMS4wNTUsMC0yLjA5Ni0wLjA2MS0zLjEyMi0wLjE4NGM1Ljc5NCwzLjcxNywxMi42NzYsNS44ODIsMjAuMDY3LDUuODgyDQoJYzI0LjA4MywwLDM3LjI1MS0xOS45NDksMzcuMjUxLTM3LjI0OWMwLTAuNTY2LTAuMDE0LTEuMTM0LTAuMDM5LTEuNjk0QzY0LjgzOCwyMC4wNjgsNjcuMDU4LDE3Ljc2NSw2OC44MTIsMTUuMTQxeiIvPg0KPC9zdmc+DQo=";


}
*/



class Profile extends React.Component {


	componentDidMount() {
		if (this.props.location.hash == "#expanded") {
			scroller.scrollTo('profile-expanded-2', { smooth: true });
		}
	}
 

	render() {
		return ( 

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
								As the web
								has become increasingly fast paced with new frameworks and standards released every year, I have recognized the importance of humility and 
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
								<h3>Front-end</h3><br />
							 	<p>
								&mdash; HTML 5<br/>
								&mdash; CSS 3/Sass<br />
								&mdash; Javascript/ES6<br />
								&mdash; jQuery<br />
								&mdash; React<br />
								&mdash; Angular 1
						 		</p>
		 					</div>

							<div className="profile-list">
								<h3>Back-end</h3>
								<p>
									<br/>&mdash; PHP
									<br/>&mdash; Node.js
									<br/>&mdash; MySQL
									<br/>&mdash; MongoDB
									<br/>&mdash; Redis
								</p>
		 					</div>

							<div className="profile-list">
								<h3>Desktop</h3>
								<p>
									<br/>&mdash; C#.NET
									<br/>&mdash; Visual Basic
									<br/>&mdash; Processing
								</p>
		 					</div>

							<div className="profile-list">
								<h3>Tools/Services</h3>
								<p> 
									<br/>&mdash; Git
									<br/>&mdash; npm
									<br/>&mdash; Webpack
									<br/>&mdash; Apache, Nginx
								</p>
		 					</div>

						</div>
					</div>
 



		 		</div>


			<Footer />
			</section>
		);
	}
}

Profile.displayName = "Profile";
export default Profile;

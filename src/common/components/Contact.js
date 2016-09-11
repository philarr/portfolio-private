import React from 'react'
import { Reveal, scroller } from 'react-scrollkit'
 
import { Link } from 'react-router'

 
class Contact extends React.Component {

 

	componentDidMount() {
		if (this.props.location.hash == "#expanded") {
			scroller.scrollTo('profile-expanded-1', { smooth: true });
		}
	}

 	componentWillReceiveProps(nextProps) {
 		/*
 		if (nextProps.params.testId !== this.props.params.testId) {
 		 
 		}
 		*/
 	}

	render() {
		return ( 

	 		<section className="animatedWrapper">
				<Reveal name="profile-expanded-1" once={ true } activeClass="animated fadeInUp" className="row wrapper-expanded animated-before page-header"> 
					<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
					 	<hr className="hr-thick" />

					</div>
					<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-1 col-xs-22 col-md-20 col-lg-10">
	 					<h1 className="label">Contact</h1>
					</div>

 

				</Reveal>
				<div className="content-bg">
					<Reveal name="profile-expanded-2" once={ true } activeClass="animated fadeInUp" className="row wrapper-expanded animated-before"> 
						<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
							<div className="label">Reach me directly</div>
						</div>
						<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-1  col-xs-22 col-md-20 col-lg-11">
							<h3>
							+1 604 781 9813<br />
							<a href="mailto:contact@pmhc.co">contact@pmhc.co</a>
							</h3>
						
						</div>
					</Reveal>
					<Reveal name="profile-expanded-2" once={ true } activeClass="animated fadeInUp" className="row wrapper-expanded animated-before"> 
						<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-4 col-xs-22 col-md-20 col-lg-4">
							<div className="label">Connect with me!</div>
						</div>
						<div  className="col-xs-offset-1 col-md-offset-2 col-lg-offset-1  col-xs-22 col-md-20 col-lg-11">
							<p className="pull-left profile-list">
								<a href="http://www.github.com/philarr" target="_blank"><img  className="icon-png" /> &nbsp; Github</a>
							</p>
							<p className="pull-left profile-list">
								<a href="http://www.twitter.com/pmhc_" target="_blank"><img  className="icon-png" /> &nbsp; Twitter</a>
							</p>	
							<p className="pull-left">
								<a href="http://www.instagram.com/pmhc_" target="_blank"><img   className="icon-png" /> &nbsp; Instagram</a>
							</p>		

						</div>

					</Reveal>
				 
 				</div>

			</section>
		);
	}
}
 
 
Contact.displayName = "Contact";
export default Contact;

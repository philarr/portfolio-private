import React from 'react'
import { Reveal, scroller } from 'react-scrollkit'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import { Link } from 'react-router'

/*
if ( process.env.CanUseDom ) {
	var instagramIcon = require('../assets/img/instagram.png');
 	var githubIcon = require('../assets/img/github-32.png');
 	var twitterDataURI = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNzIgNzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcyIDcyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHg9IjAiIGZpbGw9Im5vbmUiIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIvPg0KPHBhdGggZmlsbD0iIzU1YWNlZSIgZD0iTTY4LjgxMiwxNS4xNDFjLTIuMzQ4LDEuMDM5LTQuODY5LDEuNzQzLTcuNTE5LDIuMDZjMi43MDMtMS42Miw0Ljc3OC00LjE4Nyw1Ljc1Ni03LjI0NGMtMi41MjksMS41LTUuMzMsMi41OTItOC4zMTMsMy4xNzYNCglDNTYuMzQ5LDEwLjU5MSw1Mi45NDgsOSw0OS4xODIsOWMtNy4yMjksMC0xMy4wOTIsNS44NjEtMTMuMDkyLDEzLjA5M2MwLDEuMDI2LDAuMTE4LDIuMDIxLDAuMzM4LDIuOTgxDQoJYy0xMC44ODUtMC41NDgtMjAuNTI4LTUuNzU3LTI2Ljk4Ny0xMy42NzljLTEuMTI2LDEuOTM2LTEuNzcxLDQuMTg0LTEuNzcxLDYuNTgxYzAsNC41NDIsMi4zMTIsOC41NTEsNS44MjQsMTAuODk4DQoJYy0yLjE0Ni0wLjA2OS00LjE2NS0wLjY1Ny01LjkzLTEuNjM4Yy0wLjAwMiwwLjA1NS0wLjAwMiwwLjExLTAuMDAyLDAuMTYyYzAsNi4zNDUsNC41MTMsMTEuNjM4LDEwLjUwNCwxMi44NA0KCWMtMS4xMDEsMC4yOTgtMi4yNTYsMC40NTctMy40NDksMC40NTdjLTAuODQ2LDAtMS42NjctMC4wNzgtMi40NjUtMC4yMzFjMS42NjcsNS4yLDYuNDk5LDguOTg2LDEyLjIzLDkuMDkNCgljLTQuNDgyLDMuNTEyLTEwLjEyOSw1LjYwNi0xNi4yNiw1LjYwNmMtMS4wNTUsMC0yLjA5Ni0wLjA2MS0zLjEyMi0wLjE4NGM1Ljc5NCwzLjcxNywxMi42NzYsNS44ODIsMjAuMDY3LDUuODgyDQoJYzI0LjA4MywwLDM3LjI1MS0xOS45NDksMzcuMjUxLTM3LjI0OWMwLTAuNTY2LTAuMDE0LTEuMTM0LTAuMDM5LTEuNjk0QzY0LjgzOCwyMC4wNjgsNjcuMDU4LDE3Ljc2NSw2OC44MTIsMTUuMTQxeiIvPg0KPC9zdmc+DQo=";
}
*/


function mapStateToProps(state /*, ownProps */) {
  return {
    Test2: state.Test2,
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

class Contact extends React.Component {

	static _fetchData() {
		return "hello"
	}

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

	 		<div className="animatedWrapper">
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

			</div>
		);
	}
}
 
 
 
export default connect(mapStateToProps, mapDispatchToProps)(Contact)
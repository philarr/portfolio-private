import React from 'react';
import { Link } from 'react-router';


const ErrorPage = ({ type, message }) => (

			<div className="hero">
				<div id="hero-canvas">
					<div id="scene">
						<div className="layer hero-text">
							<div className="hero-text-left">{ type }</div>
						</div>
						<div className="layer hero-grid" />
					</div>
				</div>	
				<div className="hero-wrapper">
					<div className="inner">
						<div className="hero-msg"><span><span>{ message }</span></span></div>	  
					</div>
				</div>
			</div>
);


ErrorPage.displayName = "ErrorPage";
export default ErrorPage;
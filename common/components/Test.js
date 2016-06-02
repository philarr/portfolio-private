import React from 'react'

if ( process.env.BROWSER ) {
	require('./Test.scss');
}

class Test extends React.Component {
   constructor(props) {
      super(props);
    
   } 	
	render() {
		return (
			<div className="testLol">
				<br />Hello!
			</div>
		);
	}

}

 
 
 
export default Test
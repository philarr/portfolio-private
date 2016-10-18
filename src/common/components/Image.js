import React from 'react';

/*	
	Image wrapper to maintain page height and prevent 
	jumping of page height by padding the aspect ratio.

	Good for lazy loading images by presetting the
	container height!
 */

const Image = ({ size, children }) => {

	const [ width, height ] = size;
	const ratio = (height/width)*100 + '%';

	const AspectRatio = {
		width: '100%',
		height: '100%',
		float: 'left',
		paddingTop: ratio,
	}
	const reverseHeight = {
		width: '100%',
		height: '100%',
		marginTop: '-'+ratio
	}

	return (
		<div style={ AspectRatio }>
		 	<div style={ reverseHeight }>
		 	{ children }
		 	</div>
		</div>
	);
};

export default Image;
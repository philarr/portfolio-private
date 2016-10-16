import React from 'react';

const TextFormat = ({ children }) => (
	<span>
	{ 
		children.split("\\n").map(( line, idx ) => (<p key={ idx }>{ line }</p>)) 
	}
	</span>
);

export default TextFormat;
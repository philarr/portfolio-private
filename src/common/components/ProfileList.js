import React from 'react';

const ProfileList = ({ list }) => (
	<div className="profile-list">
		<p><small className={'icon ' + list.type}>{ list.type.toUpperCase() }</small></p>
	 	<ul>{ list.tech.map( (t, i) => <li key={ i }>{ t }</li> ) }</ul>
	</div>
);

export default ProfileList;
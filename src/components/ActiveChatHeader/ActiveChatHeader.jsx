import React from 'react';
import Avatar from '../UI/Avatar/Avatar';

import classes from './ActiveChatHeader.module.scss';

const ActiveChatHeader = props => {
	return (
		<div className={classes.ActiveChatHeader}>
			<Avatar user={props.user} />
			<h3>{props.user.name}</h3>
		</div>
	);
};

export default ActiveChatHeader;

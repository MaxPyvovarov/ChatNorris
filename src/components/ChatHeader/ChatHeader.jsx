import React from 'react';
import Avatar from '../UI/Avatar/Avatar';
import Search from '../UI/Search/Search';

import classes from './ChatHeader.module.scss';

const ChatHeader = props => {
	return (
		<div className={classes.ChatHeader}>
			<Avatar user={props.user} className={classes.Avatar} />
			<Search onUpdateSearch={props.onUpdateSearch} />
		</div>
	);
};

export default ChatHeader;

import React from 'react';
import DateForChat from '../../Date/DateForChat';

import classes from './MessageSent.module.scss';

const MessageSent = props => {
	return (
		<div className={classes.MessageSent}>
			<div>
				<p className={classes.Message}>{props.message.text.trim()}</p>
				<span className={classes.SentDate}>{DateForChat(props.sentDate)}</span>
			</div>
		</div>
	);
};

export default MessageSent;

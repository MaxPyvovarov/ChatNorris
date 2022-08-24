import React from 'react';
import DateForChat from '../../Date/DateForChat';

import classes from './MessageRecieved.module.scss';

const MessageRecieved = props => {
	return (
		<div className={classes.MessageRecieved}>
			<img src={props.picture} alt='Avatar' />
			<div>
				<p className={classes.Message}>{props.message.text.trim()}</p>
				<span className={classes.SentDate}>{DateForChat(props.sentDate)}</span>
			</div>
		</div>
	);
};

export default MessageRecieved;

import React from 'react';

import classes from './MessageSent.module.scss';

const MessageSent = props => {
	return (
		<div className={classes.MessageSent}>
			<div>
				<p className={classes.Message}>{props.message.text.trim()}</p>
				<span className={classes.SentDate}>4/22/17, 4:00 AM</span>
			</div>
		</div>
	);
};

export default MessageSent;

import React from 'react';

import classes from './MessageRecieved.module.scss';

const MessageRecieved = props => {
	return (
		<div className={classes.MessageRecieved}>
			<img src={props.picture} alt='Avatar' />
			<div>
				<p className={classes.Message}>{props.message.text.trim()}</p>
				<span className={classes.SentDate}>4/22/17, 6:21 AM</span>
			</div>
		</div>
	);
};

export default MessageRecieved;

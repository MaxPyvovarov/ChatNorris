import React from 'react';
import MessageRecieved from './MessageRecieved/MessageRecieved';
import MessageSent from './MessageSent/MessageSent';

import classes from './ActiveChat.module.scss';

const ActiveChat = props => {
	return (
		<div className={classes.ActiveChat}>
			{props.user.history.map((message, index) => {
				return message.status === 'sent' ? (
					<MessageSent
						key={index}
						message={message}
						sentDate={message.sentDate}
						picture={props.user.picture}
					/>
				) : (
					<MessageRecieved
						key={index}
						message={message}
						sentDate={message.sentDate}
						picture={props.user.picture}
					/>
				);
			})}
		</div>
	);
};

export default ActiveChat;

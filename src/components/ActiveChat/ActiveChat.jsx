import React from 'react';

import classes from './ActiveChat.module.scss';

const ActiveChat = props => {
	return (
		<div className={classes.ActiveChat}>
			{props.user.history.map((message, index) => {
				return <p key={index}>{message.text}</p>;
			})}
		</div>
	);
};

export default ActiveChat;

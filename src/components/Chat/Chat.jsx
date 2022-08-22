import React from 'react';

import classes from './Chat.module.scss';

const Chat = props => {
	return (
		<div className={classes.Chat}>
			<div>
				<img src={props.user.picture} alt='Avatar'></img>
				<h3>{props.user.name}</h3>
				<button onClick={props.signOutHandler}>Sign out</button>
			</div>
		</div>
	);
};

export default Chat;

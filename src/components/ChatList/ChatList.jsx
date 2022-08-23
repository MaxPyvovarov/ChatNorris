import React from 'react';
import ChatListItem from '../ChatListItem/ChatListItem';

import classes from './ChatList.module.scss';

const ChatList = props => {
	const elements = props.chats.map(chat => {
		const {id} = chat;
		return (
			<li key={id}>
				<ChatListItem user={chat} />
			</li>
		);
	});

	return (
		<div style={{borderRight: '1px solid #ccc'}}>
			<h2 className={classes.Heading}>Chats</h2>
			<ul className={classes.ChatList}>{elements}</ul>
		</div>
	);
};

export default ChatList;

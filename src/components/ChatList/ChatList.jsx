import React from 'react';
import ChatListItem from '../ChatListItem/ChatListItem';

import classes from './ChatList.module.scss';

const ChatList = props => {
	const elements = props.chats.map(chat => {
		const {id} = chat;
		const date = chat.history[chat.history.length - 1].sentDate;
		return (
			<li key={id}>
				<ChatListItem user={chat} onSelect={props.onSelect} sentDate={date} />
			</li>
		);
	});

	return (
		<div className={classes.Wrapper}>
			<h2 className={classes.Heading}>Chats</h2>
			<ul className={classes.ChatList}>{elements}</ul>
		</div>
	);
};

export default ChatList;

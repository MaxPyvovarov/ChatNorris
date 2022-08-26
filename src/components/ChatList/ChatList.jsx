import React from 'react';
import ChatListItem from '../ChatListItem/ChatListItem';

import classes from './ChatList.module.scss';

const ChatList = props => {
	let order = -1;
	const elements = props.chats.map(chat => {
		const {id} = chat;
		const date = chat.history[chat.history.length - 1].sentDate;
		console.log('list', chat.touched);
		return (
			<React.Fragment key={id}>
				{chat.hasNewMessage ? (
					<li style={{order: order--}}>
						<ChatListItem
							user={chat}
							onSelect={props.onSelect}
							sentDate={date}
						/>
					</li>
				) : (
					<li>
						<ChatListItem
							user={chat}
							onSelect={props.onSelect}
							sentDate={date}
						/>
					</li>
				)}
			</React.Fragment>
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

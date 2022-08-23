import React from 'react';
import ChatListItem from '../../components/ChatListItem/ChatListItem';

import classes from './ChatList.module.scss';

const ChatList = props => {
	const elements = props.contacts.map(contact => {
		const {id, ...contactProps} = contact;
		return (
			<li key={id}>
				<ChatListItem {...contactProps} />
			</li>
		);
	});

	return (
		<>
			<h2 className={classes.Heading}>Chats</h2>
			<ul className={classes.ChatList}>{elements}</ul>
		</>
	);
};

export default ChatList;

import React, {Component} from 'react';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatList from '../../components/ChatList/ChatList';
import ActiveChatHeader from '../../components/ActiveChatHeader/ActiveChatHeader';
import ActiveChat from '../../components/ActiveChat/ActiveChat';
import Input from '../../components/UI/Input/Input';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';

import classes from './Chat.module.scss';

export default class Chat extends Component {
	state = {
		activeChatId: 1,
		users: [
			{
				name: 'Max',
				picture: img1,
				id: 1,
				history: [
					{text: 'Hello Max!', status: 'sent'},
					{text: 'Hello! How are you?', status: 'recieved'},
				],
			},
			{
				name: 'Josefina',
				picture: img2,
				id: 2,
				history: [
					{text: 'Hello Jose!! W', status: 'sent'},
					{text: 'Hi, what is up?', status: 'recieved'},
				],
			},
			{
				name: 'John',
				picture: img3,
				id: 3,
				history: [
					{text: 'Hi John!!!!!', status: 'sent'},
					{text: "Hey bud, what's popping?", status: 'recieved'},
				],
			},
			{
				name: 'Lucas',
				picture: img4,
				id: 4,
				history: [
					{text: 'Hello, Lucas!', status: 'sent'},
					{text: 'Hello, nice to meet you!', status: 'recieved'},
				],
			},
			{
				name: 'Boris',
				picture: img5,
				id: 5,
				history: [
					{text: 'Hey Boris! What are you doing today?', status: 'sent'},
					{text: 'Hello)) I am free today', status: 'recieved'},
				],
			},
		],
		term: '',
	};

	onUpdateSearch = term => {
		this.setState({term});
	};

	searchUser = (users, term) => {
		if (term.length === 0) {
			return users;
		}

		return users.filter(user => {
			return user.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	};

	selectChatHandler = activeChatId => {
		this.setState({activeChatId});
	};

	sendMessageHandler = message => {
		if (message.trim() === '') return;
		const newMessage = {text: message, status: 'sent'};
		const users = [...this.state.users];

		users[this.state.activeChatId - 1].history.push(newMessage);
		this.setState({users});
	};

	render() {
		const visibileChats = this.searchUser(this.state.users, this.state.term);

		return (
			<div className={classes.Chat}>
				<div className={classes.LeftSide}>
					<ChatHeader
						user={this.props.user}
						onUpdateSearch={this.onUpdateSearch}
					/>
					<ChatList
						users={this.state.users}
						chats={visibileChats}
						onSelect={this.selectChatHandler}
					/>
				</div>

				<div className={classes.RightSide}>
					<ActiveChatHeader
						user={this.state.users[this.state.activeChatId - 1]}
					/>
					<ActiveChat user={this.state.users[this.state.activeChatId - 1]} />
					<Input onSendMessage={this.sendMessageHandler} />
				</div>
			</div>
		);
	}
}

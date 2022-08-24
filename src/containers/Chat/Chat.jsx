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
import img6 from './img/img6.jpg';

import classes from './Chat.module.scss';

function randomDate() {
	return new Date(new Date() - Math.random() * 1e11);
}

export default class Chat extends Component {
	state = {
		activeChatId: 1,
		users: [
			{
				name: 'Max',
				picture: img1,
				id: 1,
				lastMessage: 'Hello! How are you?',
				history: [
					{text: 'Hello Max!', status: 'sent', sentDate: randomDate()},
					{
						text: 'Hello! How are you?',
						status: 'recieved',
						sentDate: randomDate(),
					},
				],
			},
			{
				name: 'Josefina',
				picture: img2,
				id: 2,
				lastMessage: 'Hi, what is up?',
				history: [
					{text: 'Hello Jose!! W', status: 'sent', sentDate: randomDate()},
					{text: 'Hi, what is up?', status: 'recieved', sentDate: randomDate()},
				],
			},
			{
				name: 'John',
				picture: img3,
				id: 3,
				lastMessage: "Hey bud, what's popping?",
				history: [
					{text: 'Hi John!!!!!', status: 'sent', sentDate: randomDate()},
					{
						text: "Hey bud, what's popping?",
						status: 'recieved',
						sentDate: randomDate(),
					},
				],
			},
			{
				name: 'Lucas',
				picture: img4,
				id: 4,
				lastMessage: 'Hello, nice to meet you!',
				history: [
					{text: 'Hello, Lucas!', status: 'sent', sentDate: randomDate()},
					{
						text: 'Hello, nice to meet you!',
						status: 'recieved',
						sentDate: randomDate(),
					},
				],
			},
			{
				name: 'Boris',
				picture: img5,
				id: 5,
				lastMessage: 'Hello)) I am free today',
				history: [
					{
						text: 'Hey Boris! What are you doing today?',
						status: 'sent',
						sentDate: randomDate(),
					},
					{
						text: 'Hello)) I am free today',
						status: 'recieved',
						sentDate: randomDate(),
					},
				],
			},
			{
				name: 'Sara',
				picture: img6,
				id: 6,
				lastMessage: 'Hello)) I am free today',
				history: [
					{
						text: 'Hey Sara! How are you doing today?',
						status: 'sent',
						sentDate: randomDate(),
					},
					{
						text: 'Hello)) I am fine and you?',
						status: 'recieved',
						sentDate: randomDate(),
					},
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
		const newMessage = {text: message, status: 'sent', sentDate: new Date()};
		const users = [...this.state.users];
		users[this.state.activeChatId - 1].history.push(newMessage);
		users[this.state.activeChatId - 1].lastMessage = newMessage.text;
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

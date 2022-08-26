import React, {Component} from 'react';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatList from '../../components/ChatList/ChatList';
import ActiveChatHeader from '../../components/ActiveChatHeader/ActiveChatHeader';
import ActiveChat from '../../components/ActiveChat/ActiveChat';
import Input from '../../components/UI/Input/Input';
// import axios from 'axios';
import {getJokeRequest} from '../../components/axios/axiosChuckNorris';

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
	state =
		sessionStorage.getItem('state') === null
			? {
					activeChatId: 1,
					users: [
						{
							name: 'Max',
							picture: img1,
							id: 1,
							hasNewMessage: false,
							touched: false,
							order: 0,
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
							hasNewMessage: false,
							touched: false,
							order: 0,
							lastMessage: 'Hi, what is up?',
							history: [
								{
									text: 'Hello Jose!! W',
									status: 'sent',
									sentDate: randomDate(),
								},
								{
									text: 'Hi, what is up?',
									status: 'recieved',
									sentDate: randomDate(),
								},
							],
						},
						{
							name: 'John',
							picture: img3,
							id: 3,
							hasNewMessage: false,
							touched: false,
							order: 0,
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
							hasNewMessage: false,
							touched: false,
							order: 0,
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
							hasNewMessage: false,
							touched: false,
							order: 0,
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
							hasNewMessage: false,
							touched: false,
							order: 0,
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
					counter: 0,
			  }
			: JSON.parse(sessionStorage.getItem('state'));

	onUpdateSearch = term => {
		this.setState({term});
		this.setStorage();
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
		const newUsers = [...this.state.users];
		newUsers[activeChatId - 1].touched = true;
		this.setState({
			users: newUsers,
			activeChatId: activeChatId,
		});
		this.setStorage();
	};

	sendMessageHandler = message => {
		if (message.trim() === '') return;
		const newMessage = {text: message, status: 'sent', sentDate: new Date()};
		const users = [...this.state.users];
		const id = this.state.activeChatId - 1;
		let counter = this.state.counter;
		users[id].history.push(newMessage);
		users[id].lastMessage = newMessage.text;
		users[id].order -= ++counter;
		this.setState({users, counter});
		setTimeout(() => {
			this.getJokeHandler(id);
		}, 2000);
		this.setStorage();
	};

	async getJokeHandler(id) {
		const newUsers = this.state.users;
		let counter = this.state.counter;
		await getJokeRequest().then(joke => {
			newUsers[id].history.push({
				text: joke.toString(),
				status: 'recived',
				sentDate: new Date(),
			});
			newUsers[id].lastMessage = joke.toString();
			newUsers[id].hasNewMessage = true;
			newUsers[id].touched = false;
			newUsers[id].order -= ++counter;
		});
		this.setState({users: newUsers, counter});
		this.setStorage();
	}

	setStorage() {
		const state = this.state;
		sessionStorage.setItem('state', JSON.stringify(state));
	}
	// getStorage() {
	// 	const newState = JSON.parse(sessionStorage.getItem('state'));
	// 	this.setState({state: newState});
	// }

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

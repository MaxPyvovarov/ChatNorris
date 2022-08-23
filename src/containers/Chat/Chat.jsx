import React, {Component} from 'react';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatList from '../../components/ChatList/ChatList';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

import classes from './Chat.module.scss';

export default class Chat extends Component {
	state = {
		contacts: [
			{name: 'Max', picture: img1, id: 1},
			{name: 'Ann', picture: img2, id: 2},
			{name: 'John', picture: img3, id: 3},
		],
		term: '',
	};

	onUpdateSearch = term => {
		this.setState({term});
	};

	searchPost = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	};

	render() {
		const visibileChats = this.searchPost(this.state.contacts, this.state.term);

		return (
			<div className={classes.Chat}>
				<div className={classes.LeftSide}>
					<ChatHeader
						user={this.props.user}
						onUpdateSearch={this.onUpdateSearch}
					/>
					<ChatList contacts={this.state.contacts} chats={visibileChats} />
				</div>
				<div className={classes.RightSide}>RightSide</div>
			</div>
		);
	}
}

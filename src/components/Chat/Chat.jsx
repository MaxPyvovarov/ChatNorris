import React, {Component} from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatList from '../../containers/ChatList/ChatList';

import classes from './Chat.module.scss';

export default class Chat extends Component {
	state = {
		contacts: [
			{name: 'Max', picture: '', id: 1},
			{name: 'Ann', picture: '', id: 2},
			{name: 'John', picture: '', id: 3},
		],
		term: '',
	};

	onUpdateSearch = term => {
		this.setState({term});
	};

	render() {
		return (
			<div className={classes.Chat}>
				<div className={classes.LeftSide}>
					<ChatHeader
						user={this.props.user}
						onUpdateSearch={this.onUpdateSearch}
					/>
					<ChatList contacts={this.state.contacts} />
				</div>
				<div className={classes.RightSide}>RightSide</div>
			</div>
		);
	}
}

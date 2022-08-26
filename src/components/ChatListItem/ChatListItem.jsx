import React, {Component} from 'react';
import Avatar from '../UI/Avatar/Avatar';
import DateForList from '../Date/DateForList';

import classes from './ChatListItem.module.scss';

export default class ChatListItem extends Component {
	render() {
		let touched = this.props.user.touched;
		let hasNewMessage = this.props.user.hasNewMessage;
		console.log('item', touched);
		return (
			<div
				className={
					!touched && hasNewMessage
						? `${classes.ChatListItem} ${classes.HasNewMessage}`
						: classes.ChatListItem
				}
				onClick={() => {
					this.props.onSelect(this.props.user.id);
					touched = true;
				}}
			>
				<div>
					<Avatar user={this.props.user} className={classes.Avatar} />
					<div className={classes.Preview}>
						<h4>{this.props.user.name}</h4>
						<p>{this.props.user.lastMessage}</p>
					</div>
				</div>
				<p className={classes.Date}>{DateForList(this.props.sentDate)}</p>
			</div>
		);
	}
}

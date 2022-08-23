import React, {Component} from 'react';
import Avatar from '../UI/Avatar/Avatar';

import classes from './ChatListItem.module.scss';

export default class ChatListItem extends Component {
	render() {
		return (
			<div
				className={classes.ChatListItem}
				onClick={() => this.props.onSelect(this.props.user.id)}
			>
				<div>
					<Avatar user={this.props.user} className={classes.Avatar} />
					<div className={classes.Preview}>
						<h4>{this.props.user.name}</h4>
						<p>Last message</p>
					</div>
				</div>
				<p className={classes.Date}>Date</p>
			</div>
		);
	}
}

import React, {Component} from 'react';
import {IoMdSend} from 'react-icons/io';

import classes from './Input.module.scss';

export default class Input extends Component {
	state = {
		message: {text: ''},
	};

	sendMessageHandler = e => {
		e.preventDefault();
		const message = e.target[0].value;
		this.setState({message: ''});
		this.props.onSendMessage(message);
	};

	inputChangeHandler = e => {
		const message = e.value;
		this.setState({message});
	};

	triggerInput = () => {
		const input = document.querySelector(`.${classes.Input}`);
		const message =
			input.value.trim() === '' ? {text: input.value.trim()} : {text: ''};
		this.setState({message});
		this.props.onSendMessage(input.value);
	};

	render() {
		const htmlFor = `${Math.random()}`;
		return (
			<form
				className={classes.Wrapper}
				onSubmit={e => this.sendMessageHandler(e)}
			>
				<label htmlFor={htmlFor} onClick={this.triggerInput}>
					<IoMdSend />
				</label>
				<input
					type='text'
					className={classes.Input}
					placeholder='Type your message'
					onChange={this.inputChangeHandler}
					value={this.state.message && ''}
				></input>
			</form>
		);
	}
}

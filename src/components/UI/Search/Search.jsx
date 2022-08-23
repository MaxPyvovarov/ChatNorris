import React, {Component} from 'react';

import classes from './Search.module.scss';
import {AiOutlineSearch} from 'react-icons/ai';

export default class Search extends Component {
	state = {
		term: '',
	};

	onUpdateSearch = e => {
		const term = e.target.value;
		this.setState({term});
		this.props.onUpdateSearch(term);
	};

	render() {
		const htmlFor = `${Math.random()}`;
		return (
			<div className={classes.Wrapper}>
				<label htmlFor={htmlFor} className={classes.Label}>
					<AiOutlineSearch />
				</label>
				<input
					className={classes.Search}
					type='text'
					placeholder='Search or start new chat'
					onChange={this.onUpdateSearch}
				/>
			</div>
		);
	}
}

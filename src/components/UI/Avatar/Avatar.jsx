import React from 'react';
import {BsCheckCircle} from 'react-icons/bs';

import classes from './Avatar.module.scss';

const Avatar = props => {
	return (
		<div className={classes.Avatar}>
			<img src={props.user.picture} alt={props.user.name}></img>
			<BsCheckCircle className={classes.Check} />
		</div>
	);
};

export default Avatar;

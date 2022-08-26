import React from 'react';
import DateForChat from '../../Date/DateForChat';

import classes from './MessageRecieved.module.scss';

const MessageRecieved = props => {
	// props.GetJokeRequest(props.id);
	return (
		<div className={classes.MessageRecieved}>
			<img src={props.picture} alt='Avatar' />
			<div>
				<p className={classes.Message}>{props.message.text}</p>
				<span className={classes.SentDate}>{DateForChat(props.sentDate)}</span>
			</div>
		</div>
	);
};

// function GetJokeRequest() {
// 	const [joke, setJoke] = useState('');

// 	const getJoke = () => {
// 		axios.get('https://api.chucknorris.io/jokes/random').then(response => {
// 			setJoke(response.data.value);
// 		});
// 	};
// 	useEffect(() => {
// 		getJoke();
// 	}, []);
// 	return <>{joke}</>;
// }

export default MessageRecieved;

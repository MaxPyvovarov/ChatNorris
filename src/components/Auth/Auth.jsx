import {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import Chat from '../../containers/Chat/Chat';

import classes from './Auth.module.scss';

function Auth() {
	const [user, setUser] = useState({});
	const loggedIn = Object.keys(user).length !== 0;

	function handleCallbackResponse(response) {
		var userObject = jwt_decode(response.credential);
		setUser(userObject);
		document.getElementById('signInDiv').hidden = true;
	}

	function handleSignOut() {
		setUser({});
		document.getElementById('signInDiv').hidden = false;
	}

	useEffect(() => {
		// eslint-disable-next-line no-undef
		google.accounts.id.initialize({
			client_id:
				'463651140560-ljhpcu5tde8df8onl8eva9mdmcstid4b.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});
		// eslint-disable-next-line no-undef
		google.accounts.list({});

		// eslint-disable-next-line no-undef
		google.accounts.id.renderButton(document.getElementById('signInDiv'), {
			theme: 'outline',
			size: 'large',
		});
	});

	return (
		<>
			<div
				className={classes.Auth}
				style={{display: loggedIn ? 'none' : 'flex'}}
			>
				<div>
					<h1>Authorization</h1>
					<div id='signInDiv'></div>
				</div>
			</div>
			{Object.keys(user).length !== 0 && (
				<Chat user={user} signOutHandler={handleSignOut} />
			)}
		</>
	);
}

export default Auth;

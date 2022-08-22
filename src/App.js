import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import Chat from './components/Chat/Chat';

import './App.css';

const google = window.google;

function App() {
	const [user, setUser] = useState({});

	function handleCallbackResponse(response) {
		var userObject = jwt_decode(response.credential);
		setUser(userObject);
		console.log(userObject);
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
				'463651140560-ggvcqa857oflabvss4ndokmg86m3a0gd.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});

		// eslint-disable-next-line no-undef
		google.accounts.id.renderButton(document.getElementById('signInDiv'), {
			theme: 'outline',
			size: 'large',
		});
	});

	return (
		<div className='App'>
			<div id='signInDiv'></div>
			{Object.keys(user).length !== 0 && (
				<Chat user={user} signOutHandler={handleSignOut} />
			)}
			{/* {Object.keys(user).length !== 0 && (
				<button onClick={handleSignOut}>Sign out</button>
			)} */}
		</div>
	);
}

export default App;

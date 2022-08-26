import axios from 'axios';

export async function getJokeRequest() {
	const res = await axios.get('https://api.chucknorris.io/jokes/random');
	return res.data.value;
}

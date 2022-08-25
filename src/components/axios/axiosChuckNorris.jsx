import axios from 'axios';

// export default axios.create({
// 	baseURL: 'https://api.chucknorris.io/jokes/random',
// });

export default async function getJoke() {
	// await axios
	// 	.get('https://api.chucknorris.io/jokes/random')
	// 	.then(response => (response.data.value))
	// 	.catch(error => console.log(error));

	try {
		await axios
			.get('https://api.chucknorris.io/jokes/random')
			.then(response => response.data.value);
	} catch (e) {
		console.log(e);
	}
}
setTimeout(console.log('hime'), 5000);

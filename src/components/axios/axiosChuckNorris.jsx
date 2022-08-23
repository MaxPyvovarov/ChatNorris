import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.chucknorris.io/jokes/random',
});

// async function getJoke() {
// 	try {
// 		const response = await axios.get();
// 		console.log(response.data.value);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// getJoke();

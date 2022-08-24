import moment from 'moment';

export default function DateForChat(date) {
	return moment(date).format('M/D/YY, h:mmA');
}

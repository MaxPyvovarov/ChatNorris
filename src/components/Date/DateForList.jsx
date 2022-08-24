import moment from 'moment';

export default function DateForList(date) {
	return moment(date).format('MMM D, YYYY');
}

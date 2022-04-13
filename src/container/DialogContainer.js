import Dialog from '../components/Dialog';
import { useSelector } from 'react-redux';

function DialogContainer({ visible, onClose }) {
	const { date, id } = useSelector(state => state.calendar.selectDate);

	return (
		<Dialog visible={visible} onClose={onClose} selectDate={date} id={id} />
	);
}

export default DialogContainer;

import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { setDate } from '../modules/calendar';

function HeaderContainer() {
	const { year, month } = useSelector(state => state.calendar.calendar);
	const dispatch = useDispatch();

	const onChangeMonth = useCallback(
		newMonth => {
			dispatch(setDate({ year, month: newMonth, data: [] }));
		},
		[dispatch, year],
	);

	return <Header year={year} month={month} onChange={onChangeMonth} />;
}

export default HeaderContainer;

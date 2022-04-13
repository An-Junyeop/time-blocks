import React from 'react';
import Calendar from '../components/Calendar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setDate } from '../modules/calendar';

const createCalendarDays = (now = new Date()) => {
	const year = now.getFullYear(); // 현재 연도
	const month = now.getMonth(); // 현재 달
	const firstDate = new Date(year, month, 1); // 현재 월 초
	const lastDate = new Date(year, month + 1, 0).getDate(); // 현재 월 말
	const preMonthLastDate = new Date(year, month, 0).getDate(); // 전 월 말
	const date = [];

	// 현재 달
	for (let i = 1; i <= lastDate; i++) {
		date.push({
			id: `${year}${month}${i}`,
			year,
			month,
			day: i,
		});
	}

	// 전 달
	for (
		let i = preMonthLastDate;
		i >= preMonthLastDate - firstDate.getDay() + 1;
		i--
	) {
		date.unshift({
			id: `${year}${month - 1}${i}`,
			year,
			month: month - 1,
			day: i,
		});
	}

	// 다음 달
	const leftDays = 35 - date.length;
	for (let i = 1; i <= leftDays; i++) {
		date.push({
			id: `${year}${month + 1}${i}`,
			year,
			month: month + 1,
			day: i,
		});
	}

	return { year, month, date };
};

function CalendarContainer() {
	const dispatch = useDispatch();
	const { year, month, date } = useSelector(state => state.calendar.calendar);
	const schedule = useSelector(state => state.calendar.schedule);

	useEffect(() => {
		const date =
			year !== undefined && month !== undefined
				? new Date(year, month, 1)
				: new Date();
		dispatch(setDate(createCalendarDays(date)));
	}, [dispatch, month, year]);

	return (
		<>
			{date ? (
				<Calendar
					year={year}
					month={month}
					date={date}
					schedule={schedule}
				/>
			) : null}
		</>
	);
}

export default React.memo(CalendarContainer);

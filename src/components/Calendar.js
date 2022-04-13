import React, { useCallback } from 'react';
import Date from './Date';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectDate } from '../modules/calendar';
import DialogContainer from '../container/DialogContainer';

function Calendar({ year, month, date, schedule }) {
	const [visible, setVisible] = useState(false);
	const dispatch = useDispatch();

	const onClickDate = useCallback(
		day => {
			dispatch(selectDate(day));
			setVisible(visible => !visible);
		},
		[dispatch],
	);
	const onCloseDialog = useCallback(e => {
		setVisible(false);
	}, []);

	return (
		<>
			<StyledCalendarContainer>
				<StyledCalendarHeader>
					<span>Sun</span>
					<span>Mon</span>
					<span>Tue</span>
					<span>Wed</span>
					<span>Thu</span>
					<span>Fri</span>
					<span>Sat</span>
				</StyledCalendarHeader>

				<StyledCalendar>
					{date.map((day, i) => (
						<Date
							key={day.id}
							year={year}
							month={month}
							day={day}
							onClick={onClickDate}
							schedule={schedule[day.id]}
						/>
					))}
				</StyledCalendar>
			</StyledCalendarContainer>

			<DialogContainer visible={visible} onClose={onCloseDialog} />
		</>
	);
}

const StyledCalendarContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const StyledCalendarHeader = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
	text-align: center;
	font-weight: bold;

	span {
		width: calc(100% / 7);
	}
`;

const StyledCalendar = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
`;

export default React.memo(Calendar);

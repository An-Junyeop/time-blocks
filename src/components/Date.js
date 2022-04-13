import React from 'react';
import styled, { css } from 'styled-components';
import Schedule from './Schedule';

function Date({ year, month, day, schedule, onClick }) {
	return (
		<StyledDate
			isActive={year === day.year && month === day.month}
			onClick={e => onClick(day)}
		>
			{day.day}
			{schedule ? <Schedule schedule={schedule} /> : null}
		</StyledDate>
	);
}

const StyledDate = styled.div`
	width: calc(100% / 7);
	height: calc(100% / 5);
	padding-top: 10px;
	border-bottom: 1px solid #eee;
	text-align: center;
	font-weight: bold;
	box-sizing: border-box;
	cursor: pointer;

	${({ isActive }) => css`
		color: ${isActive ? '#000' : '#bbb'};

		&:nth-child(7n-6) {
			color: ${isActive ? '#ff0000' : '#f3b8b8'};
		}
	`}
`;

export default React.memo(Date);

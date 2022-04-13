import styled, { css } from 'styled-components';

function Schedule({ schedule }) {
	return schedule.map((item, i) => (
		<StyledSchedule key={i} backgroundColor={item.color}>
			{item.title}
		</StyledSchedule>
	));
}

const StyledSchedule = styled.div`
	width: 100%;
	padding: 2px 4px;
	border-radius: 5px;
	text-align: left;
	font-size: 12px;
	color: #fff;
	box-sizing: border-box;
	margin-top: 3px;

	${({ backgroundColor }) => css`
		background: ${backgroundColor ? backgroundColor : '#f68c8c'};
	`}
`;

export default Schedule;

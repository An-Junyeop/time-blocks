import styled from 'styled-components';

function Header({ year, month, onChange }) {
	return (
		<StyledHeader>
			<StyledButton onClick={e => onChange(month - 1)} />
			<StyleHeaderTitle>
				{month + 1}
				<span>{year}</span>
			</StyleHeaderTitle>
			<StyledButton onClick={e => onChange(month + 1)} />
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	padding-left: 15px;
	align-items: center;
	box-sizing: border-box;
`;

const StyledButton = styled.button`
	background: none;
	cursor: pointer;

	&:first-child {
		border-bottom: 7px solid transparent;
		border-top: 7px solid transparent;
		border-left: 9px solid transparent;
		border-right: 9px solid #000;
		margin-right: 5px;
	}

	&:last-child {
		border-bottom: 7px solid transparent;
		border-top: 7px solid transparent;
		border-left: 9px solid #000;
		border-right: 9px solid transparent;
		margin-left: 5px;
	}
`;

const StyleHeaderTitle = styled.div`
	display: flex;
	align-items: center;
	font-size: 24px;
	font-weight: bold;
	box-sizing: border-box;

	span {
		margin-left: 6px;
		font-size: 14px;
		font-weight: normal;
	}
`;
export default Header;

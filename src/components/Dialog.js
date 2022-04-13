import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveSchedule } from '../modules/calendar';

const palette = ['#333C83', '#F24A72', '#FDAF75', '#57c04f'];

function Dialog({ visible, selectDate, id, onClose }) {
	const [input, setInput] = useState('');
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();

	const onChangeInput = e => {
		const value = e.target.value;
		setInput(value);
	};
	const onClickBackground = e => {
		onClose();
		setInput('');
	};
	const onClickInDialog = e => {
		e.stopPropagation();
	};
	const onClickButton = e => {
		if (input.trim() !== '') {
			dispatch(
				saveSchedule({
					id,
					title: input,
					color: palette[Math.floor(Math.random() * 4)],
				}),
			);
		}

		onClose();
		setInput('');
	};

	useEffect(() => {
		if (selectDate) {
			const week = selectDate.toLocaleString('en-US', {
				weekday: 'short',
			});
			const month = selectDate.toLocaleString('en-US', {
				month: 'short',
			});

			setTitle(`${week}, ${selectDate.getDate()} ${month}`);
		}
	}, [selectDate]);

	return (
		<StyledDialogBackGround visible={visible} onClick={onClickBackground}>
			<StyledDialog onClick={onClickInDialog}>
				<StyledDialogTitle>{title}</StyledDialogTitle>

				<input
					type='text'
					value={input}
					onChange={onChangeInput}
					placeholder='Event Title'
				/>

				<button onClick={onClickButton}>Confirm</button>
			</StyledDialog>
		</StyledDialogBackGround>
	);
}

const StyledDialogBackGround = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	${({ visible }) => css`
		display: ${visible ? 'flex' : 'none'};
	`}

	align-items: center;
	justify-content: center;
	z-index: 1;
	background: rgba(0, 0, 0, 0.3);
	top: 0;
	left: 0;
`;

const StyledDialog = styled.div`
	width: 250px;
	height: 250px;
	padding: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 15px;
	background: #fff;

	input[type='text'] {
		width: 90%;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 15px;
	}

	button {
		width: 150px;
		padding: 15px;
		background: #2096f3;
		border-radius: 5px;
		font-size: 16px;
		color: #fff;
	}
`;

const StyledDialogTitle = styled.div`
	font-size: 24px;
	font-weight: bold;
`;

export default Dialog;

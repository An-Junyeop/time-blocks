const SET_DATE = 'SET_DATE';
const SELECT_DATE = 'SELECT_DATE';
const SAVE_SCHEDULE = 'SAVE_SCHEDULE';

export const setDate = ({ year, month, date }) => ({
	type: SET_DATE,
	year,
	month,
	date,
});
export const selectDate = day => ({
	type: SELECT_DATE,
	day,
});
export const saveSchedule = ({ title, id, color }) => ({
	type: SAVE_SCHEDULE,
	id,
	title,
	color,
});

const initialState = {
	calendar: {},
	schedule: {},
	selectDate: {},
};

export default function calendar(state = initialState, action) {
	switch (action.type) {
		case SET_DATE:
			return {
				...state,
				calendar: {
					year: action.year,
					month: action.month,
					date: action.date,
				},
			};
		case SELECT_DATE:
			return {
				...state,
				selectDate: {
					id: action.day.id,
					date: new Date(
						action.day.year,
						action.day.month,
						action.day.day,
					),
				},
			};
		case SAVE_SCHEDULE:
			console.log(action);
			if (!state.schedule[action.id]) {
				state.schedule[action.id] = [];
			}
			return {
				...state,
				schedule: {
					...state.schedule,
					[action.id]: state.schedule[action.id].concat({
						title: action.title,
						color: action.color,
					}),
				},
			};
		default:
			return state;
	}
}

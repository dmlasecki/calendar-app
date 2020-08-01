import { ActionTypes } from "../actions";
const DATE = new Date();

const initialState = {
	day: DATE.getDate(),
	month: DATE.getMonth(),
	year: DATE.getFullYear(),
};

console.log(initialState);

export default function date(state = initialState, { type, payload }) {
	switch (type) {
		case ActionTypes.SET_DAY:
			return { ...state, day: payload };
		case ActionTypes.SET_MONTH:
			return { ...state, month: payload };
		case ActionTypes.SET_MONTH_AND_YEAR:
			return { ...state, ...payload };
		default:
			return state;
	}
}

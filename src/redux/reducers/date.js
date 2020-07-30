import { ActionTypes } from "../actions";
const DATE = new Date();

const initialState = {
	day: DATE.getDay(),
	month: DATE.getMonth(),
	year: DATE.getFullYear(),
};

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

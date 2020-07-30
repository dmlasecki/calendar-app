import { ActionTypes } from "../actions";

const initialState = {
	day: new Date().getDay(),
	month: new Date().getMonth(),
	year: new Date().getFullYear(),
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

import { ActionTypes } from "../actions";
import { getNumOfDaysInMonth } from "../utils";
const DATE = new Date();

const initialState = {
	day: DATE.getDate(),
	month: DATE.getMonth(),
	year: DATE.getFullYear(),
	numOfDaysInMonth: getNumOfDaysInMonth(DATE.getFullYear(), DATE.getMonth()),
	numOfDaysInMonthPrev: getNumOfDaysInMonth(DATE.getFullYear(), DATE.getMonth() - 1),
};

function setDay(date) {
	if (date.day < 1) {
		return { ...date, day: date.numOfDaysInMonthPrev, month: date.month - 1 };
	} else if (date.day > date.numOfDaysInMonth) {
		return { ...date, day: 1, month: date.month + 1 };
	} else {
		return { ...date };
	}
}

function setMonth(date) {
	if (date.month < 0) {
		return { ...date, month: 11, year: date.year - 1 };
	} else if (date.month > 11) {
		return { ...date, month: 0, year: date.year + 1 };
	} else {
		return { ...date };
	}
}

function setNumOfDaysInMonth(date) {
	return {
		...date,
		numOfDaysInMonth: getNumOfDaysInMonth(date.year, date.month),
		numOfDaysInMonthPrev: getNumOfDaysInMonth(date.year, date.month - 1),
	};
}

function setFullDate(state, payload) {
	let date = { ...state, ...payload };
	date = setDay(date);
	date = setMonth(date);
	date = setNumOfDaysInMonth(date);
	return date;
}

export default function date(state = initialState, { type, payload }) {
	switch (type) {
		case ActionTypes.SET_DATE:
			return setFullDate(state, payload);
		default:
			return state;
	}
}

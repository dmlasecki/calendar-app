import { createAction } from "./utils";

export const ActionTypes = {
	SET_DAY: "SET_DAY",
	SET_MONTH: "SET_MONTH",
	SET_MONTH_AND_YEAR: "SET_MONTH_AND_YEAR",
};

export const ActionCreators = {
	setDay: (day) => createAction(ActionTypes.SET_DAY, day),
	setMonth: (month) => createAction(ActionTypes.SET_MONTH, month),
	setMonthAndYear: (monthAndYear) => createAction(ActionTypes.SET_MONTH_AND_YEAR, { ...monthAndYear}),
};

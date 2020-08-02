import { createAction } from "./utils";

export const ActionTypes = {
	SET_DAY: "SET_DAY",
	SET_MONTH: "SET_MONTH",
	SET_MONTH_AND_YEAR: "SET_MONTH_AND_YEAR",
	ADD_TASK: "ADD_TASK",
	UPDATE_TASK: "UPDATE_TASK",
	UI_OPEN_MODAL: "UI_OPEN_MODAL",
	UI_HIDE_MODAL: "UI_HIDE_MODAL",
};

export const ActionCreators = {
	setDay: (day) => createAction(ActionTypes.SET_DAY, day),
	setMonth: (month) => createAction(ActionTypes.SET_MONTH, month),
	setMonthAndYear: (monthAndYear) =>
		createAction(ActionTypes.SET_MONTH_AND_YEAR, { ...monthAndYear }),
	addTask: (newTask) => createAction(ActionTypes.ADD_TASK, { ...newTask }),
	updateTask: (task) => createAction(ActionTypes.UPDATE_TASK, { ...task }),
	openModal: () => createAction(ActionTypes.UI_OPEN_MODAL),
	hideModal: () => createAction(ActionTypes.UI_HIDE_MODAL)
};

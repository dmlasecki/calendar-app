import { createSelector } from "reselect";

const dateSelector = (state) => {
	return { ...state.date };
};

const tasksListSelector = (state) => {
	return { ...state };
};

export const getNumOfDaysInMonth = createSelector(dateSelector, ({ year, month }) => {
	const d = new Date(year, month + 1, 0);
	return d.getDate();
});

export const getNumOfDaysInMonthPrev = createSelector(dateSelector, ({ year, month }) => {
	const d = new Date(year, month, 0);
	return d.getDate();
});

export const getFirstDayOfMonth = createSelector(dateSelector, ({ year, month }) => {
	const d = new Date(year, month, 1);
	return d.getDay();
});

export const getTodayTasks = createSelector(tasksListSelector, ({ date, taskList }) => {
	return taskList
		.filter((e) => e.day === date.day && e.month === date.month && e.year === date.year)
		.map((t) => t.tasks)
		.flat();
});

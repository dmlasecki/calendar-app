import { createSelector } from "reselect";
import { TaskArray } from "./taskArray";

const dateSelector = (state) => {
	return { ...state.date };
};

const tasksListSelector = (state) => {
	return { ...state };
};

export const getFirstDayOfMonth = createSelector(dateSelector, ({ year, month }) => {
	const d = new Date(year, month, 1);
	return d.getDay();
});

export const getNumOfTasksPerDays = createSelector(tasksListSelector, ({ date, taskList }) => {
	return taskList
		.filter((t) => t.month === date.month && t.year === date.year)
		.map((e) => ({ day: e.day, tasks: e.tasks.length }));
});

export const getTodayTasks = createSelector(tasksListSelector, ({ date, taskList }) => {
	return new TaskArray(taskList).flatArray(date).setOffsetY().setOffsetX().setDuration().get();
});

export const getDateInfo = createSelector(tasksListSelector, ({ date, taskList }) => {
	return taskList.filter(
		(e) => e.day === date.day && e.month === date.month && e.year === date.year
	)[0];
});

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

Array.prototype.flatArray = function (date) {
	return this.filter((e) => e.day === date.day && e.month === date.month && e.year === date.year)
		.map((t) => t.tasks)
		.flat();
};

Array.prototype.getOffsetY = function () {
	return this.map((a, index) => ({
		...a,
		offsetX: this.slice(0, index).filter(
			(e) => (e.start > a.start && e.start < a.end) || (e.end > a.start && e.end < a.end)
		).length,
	}));
};

Array.prototype.getOffsetX = function () {
	return this.map((t) => ({ ...t, offsetY: (t.start - 8) * 80 }));
};

Array.prototype.getDuration = function () {
	return this.map(t => ({...t, duration: (t.end -t.start) * 80 }))
}

export const getTodayTasks = createSelector(tasksListSelector, ({ date, taskList }) => {
	return taskList.flatArray(date).getOffsetY().getOffsetX().getDuration();
});

export const getDateInfo = createSelector(tasksListSelector, ({ date, taskList }) => {
	return taskList.filter(
		(e) => e.day === date.day && e.month === date.month && e.year === date.year
	)[0];
});

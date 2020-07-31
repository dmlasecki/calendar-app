const BASE_GRID_NUM = 6 * 7;

export function crateFullCalendarForMonth(numOfDaysInMonth, numOfDaysInMonthPrev, firstDayOfMonth) {
	let arrayOfDays = getIterableArrayFromNum(numOfDaysInMonthPrev).slice(
		firstDayOfMonth ? -firstDayOfMonth : numOfDaysInMonthPrev
	);
	arrayOfDays = [...arrayOfDays, ...getIterableArrayFromNum(numOfDaysInMonth)];
	arrayOfDays = [
		...arrayOfDays,
		...getIterableArrayFromNum(BASE_GRID_NUM - numOfDaysInMonth - firstDayOfMonth),
	];
	return arrayOfDays;
}

function getIterableArrayFromNum(num) {
	return Array.from({ length: num }, (k, v) => v + 1);
}

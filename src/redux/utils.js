export function createAction(type, payload) {
	if (typeof payload === "undefined") {
		return { type };
	} else {
		return { type, payload };
	}
}

export function getNumOfDaysInMonth(year, month) {
	const d = new Date(year, month + 1, 0);
	return d.getDate();
}
export function createAction(type, payload) {
	if (typeof payload === "undefined") {
		return { type };
	} else {
		return { type, payload };
	}
}

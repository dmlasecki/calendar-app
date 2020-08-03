import { v4 as uuidv4 } from "uuid";
import randomSentence from "random-sentence";

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

export function populateCalendar() {
	let calendar = [];
	for (let i = 0; i < 100; i++) {
		calendar = [
			...calendar,
			{
				year: getRandomIntInclusive(2019, 2021),
				month: getRandomIntInclusive(0, 11),
				day: getRandomIntInclusive(1, 27),
				tasks: [...populateTaskList()],
			},
		];
	}
	return calendar;
}

function populateTaskList() {
	const numOfTasks = getRandomIntInclusive(0, 3);
	let taskArray = [];
	for (let i = 0; i < numOfTasks; i++) {
		const hours = [getRandomIntInclusive(8, 16), getRandomIntInclusive(8, 16)].sort(
			(a, b) => a - b
		);

		const start = hours[0];
		let end = hours[1];
		if (start === end) {
			end = end + 0.5;
		}

		taskArray = [
			...taskArray,
			{
				id: uuidv4(),
				start: start,
				end: end,
				content: randomSentence({ min: 4, max: 7 }),
			},
		];
	}
	return taskArray;
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

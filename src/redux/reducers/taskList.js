import { ActionTypes } from "../actions";
import { v4 as uuidv4 } from "uuid";

function isAnyDateEqual(a, b) {
	return a.some((s) => isDateEqual(s, b))
}

function isDateEqual(a, b) {
	return a.year === b.year && a.month === b.month && a.day === b.day;
}

function updateTask(state, payload) {
	return state.map((s) =>
		isDateEqual(s, payload)
			? { ...s, tasks: s.tasks.map((t) => (t.id === payload.task.id ? payload.task : t)) }
			: s
	);
}

function addTask(state, payload) {
	if (isAnyDateEqual(state, payload)) {
		return state.map((s) =>
			isDateEqual(s, payload)
				? { ...s, tasks: [...s.tasks, { id: uuidv4(), ...payload.task }] }
				: s
		);
	} else {
		return [
			...state,
			{
				year: payload.year,
				month: payload.month,
				day: payload.day,
				tasks: [{ id: uuidv4(), ...payload.task }],
			},
		];
	}
}

const initialState = [
	{
		year: 2020,
		month: 7,
		day: 2,
		tasks: [
			{
				id: uuidv4(),
				start: 10,
				end: 11,
				content: "Go for a walk",
			}
		],
	},
];

export default function taskList(state = initialState, { type, payload }) {
	switch (type) {
		case ActionTypes.ADD_TASK:
			return addTask(state, payload);
		case ActionTypes.UPDATE_TASK:
			return updateTask(state, payload);
		default:
			return state;
	}
}

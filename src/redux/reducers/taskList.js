import { ActionTypes } from "../actions";

function updateTask(state, payload) {
	return state.map((s) =>
		s.id === payload.id
			? { ...s, tasks: s.tasks.map((t) => (t.id === payload.task.id ? payload.task : t)) }
			: s
	);
}

const initialState = [
	{
		id: 202072,
		year: 2020,
		month: 7,
		day: 2,
		tasks: [
			{
				id: 20621,
				start: 10,
				end: 11,
				content: "Go for a walk",
			},
			{
				id: 206218,
				start: 11,
				end: 12.5,
				content: "Go shopping",
			},
		],
	},
	{
		id: 202071,
		year: 2020,
		month: 7,
		day: 1,
		tasks: [
			{
				id: 20621,
				start: 10,
				end: 11,
				content: "Go for a walk",
			},
			{
				id: 206218,
				start: 11,
				end: 12.5,
				content: "Go shopping",
			},
		],
	},
];

export default function taskList(state = initialState, { type, payload }) {
	switch (type) {
		case ActionTypes.ADD_TASK:
			debugger;
			return { ...state, payload };
		case ActionTypes.UPDATE_TASK:
			return updateTask(state, payload);
		default:
			return state;
	}
}

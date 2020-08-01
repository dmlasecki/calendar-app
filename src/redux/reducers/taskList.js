import { ActionTypes } from "../actions";

const initialState = [
	{
		year: 2020,
		month: 7,
		day: 1,
		tasks: [
			{
				id: 20621,
				start: 10,
				end: 10.5,
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
			return { ...state,  payload };
		default:
			return state;
	}
}

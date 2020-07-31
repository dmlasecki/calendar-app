import { ActionTypes } from "../actions";

const initialState = [
	{
		year: 2020,
		month: 6,
		day: 21,
		tasks: [
			{
				id: 1,
				start: 7,
				end: 7.5,
				content: "Go for a walk",
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

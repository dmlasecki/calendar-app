import { ActionTypes } from "../actions";

const initialState = {
	isModalOpen: false,
};

export default function ui(state = initialState, { type, payload }) {
	switch (type) {
		case ActionTypes.UI_OPEN_MODAL:
			return { ...state, isModalOpen: true };
		case ActionTypes.UI_HIDE_MODAL:
			return { ...state, isModalOpen: false };
		default:
			return state;
	}
}

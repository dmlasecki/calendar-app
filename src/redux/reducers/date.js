const initialState = {
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
}
export default function date(state = initialState, { type, payload }) {
    switch(type) {
        case "SET_DAY":
            return { ...state, day: payload }
        default:
            return state;
    }
}
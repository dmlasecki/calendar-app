import { createSelector } from "reselect";

const dateSelector = state => {
    return { ...state.date }
}

export const getNumOfDaysInMonth = createSelector(
    dateSelector,
    ({year, month}) => {
        const d = new Date(year, month + 1, 0);
        return d.getDate();
    }
)

export const getFirstDayOfMonth = createSelector(
    dateSelector,
    ({ year, month }) => {
        const d = new Date(year, month, 1);
        return d.getDay();
    }
)
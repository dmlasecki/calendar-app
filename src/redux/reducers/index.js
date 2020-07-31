import { combineReducers } from "redux";
import date from "./date";
import taskList from "./taskList";

export default combineReducers({
    date,
    taskList
})
import { combineReducers } from "redux";
import date from "./date";
import taskList from "./taskList";
import ui from "./ui";

export default combineReducers({
    date,
    taskList,
    ui
})
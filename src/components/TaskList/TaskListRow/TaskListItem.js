import React from "react";
import style from "./TaskListItem.module.css"

export default function TaskListItem({ task, duration, offsetY, onClick }) {
    return <div className={style.taskListItem} style={{height: duration, top: offsetY}} onClick={onClick}>
        {task.content}
    </div>
}
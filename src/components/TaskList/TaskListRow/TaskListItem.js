import React from "react";
import style from "./TaskListItem.module.css"

export default function TaskListItem({ task, duration, offsetY, offsetX, onClick }) {
    return <div className={style.taskListItem} style={{height: duration, top: offsetY, left: `${offsetX}%`}} onClick={onClick}>
        {task.content}
    </div>
}
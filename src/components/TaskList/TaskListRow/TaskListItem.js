import React from "react";
import style from "./TaskListItem.module.css"

export default function TaskListItem({ task, duration, offsetY }) {
    return <div className={style.taskListItem} style={{height: duration, top: offsetY}}>
        {task.content}
    </div>
}
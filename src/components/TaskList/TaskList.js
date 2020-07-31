import React from "react";
import TaskListItemEmpty from "./TaskListItem/TaskListItemEmpty";
import TaskListItem from "./TaskListItem/TaskListItem";

export default function TaskList({ todayTasks, hours,  }) {
	return hours.map((hour, index) => {
		const tasksInRange = isTaskInRange(hour, hours[index + 1]);
		return tasksInRange.length > 0 ? (
			<TaskListItem
				key={index}
				start={hour}
				end={hours[index + 1]}
				isEven={isEven(index)}
				task={tasksInRange}
			/>
		) : (
			<TaskListItemEmpty
				key={index}
				start={hour}
				end={hours[index + 1]}
				isEven={isEven(index)}
			/>
		);
	});

	function isTaskInRange(start, end) {
	    if (todayTasks.length> 0) {
            return todayTasks[0].tasks.filter((e) => e.start >= start && e.end <= end);
        } else {
	        return []
        }
	}
    function isEven(index) {
        return index % 2 === 0;
    }
}

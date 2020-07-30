import React from "react";

export default function GridCalendarTile({ date, setMonth, setMonthAndYear }) {
	function handleOnClick(num) {
		let month = date.month + num;
		let year = date.year;
		if (month > 11) {
			year += 1;
			month = 0;
			setMonthAndYear({ month, year });
		} else if (month < 0) {
		    month = 11;
			year -= 1;
			setMonthAndYear({ month, year });
		} else {
			setMonth(month);
		}
	}
	return (
		<div>
			<button onClick={() => handleOnClick(-1)}>{"<"}</button>
			<button>Today</button>
			<button onClick={() => handleOnClick(1)}>{">"}</button>
		</div>
	);
}

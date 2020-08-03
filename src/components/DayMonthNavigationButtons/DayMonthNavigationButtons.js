import React from "react";

export default function DayMonthNavigationButtons({ setDate, date, type }) {
	function handleClick(num) {
		setDate({
			[type]: date[type] + num,
		});
	}

	return (
		<>
			<button onClick={() => handleClick(-1)}>{"<"}</button>
			<button onClick={() => handleClick(1)}>{">"}</button>
		</>
	);
}

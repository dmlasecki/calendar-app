import React from "react";
import styles from "./GridCalendarTile.module.css";

import { MONTHS } from "../../constants/constants";

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
		<div className={styles.gridCalendarTile}>
			<div className={styles.gridCalendarTileInfo}>
				<b>{MONTHS[date.month]}</b>{" "}<span>{date.year}</span>
			</div>
			<div>
				<button onClick={() => handleOnClick(-1)}>{"<"}</button>
				<button onClick={() => handleOnClick(1)}>{">"}</button>
			</div>

		</div>
	);
}

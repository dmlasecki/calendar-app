import React from "react";
import styles from "./GridCalendarTile.module.css";

import { MONTHS } from "../../constants/constants";

export default function GridCalendarTile({
	date,
	setDate,
}) {
	function handleOnClick(num) {
		setDate({
			month: date.month + num,
		})
	}
	return (
		<div className={styles.gridCalendarTile}>
			<div className={styles.gridCalendarTileInfo}>
				<b>{MONTHS[date.month]}</b> <span>{date.year}</span>
			</div>
			<div>
				<button onClick={() => handleOnClick(-1)}>{"<"}</button>
				<button onClick={() => handleOnClick(1)}>{">"}</button>
			</div>
		</div>
	);
}

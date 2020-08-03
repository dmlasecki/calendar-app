import React from "react";
import styles from "./GridCalendarTile.module.css";

import { MONTHS } from "../../constants/constants";

import DayMonthNavigationButtons from "../DayMonthNavigationButtons/DayMonthNavigationButtons";

export default function GridCalendarTile({
	date,
	setDate,
}) {
	return (
		<div className={styles.gridCalendarTile}>
			<div className={styles.gridCalendarTileInfo}>
				<b>{MONTHS[date.month]}</b> <span>{date.year}</span>
			</div>
			<div>
				<DayMonthNavigationButtons
					type={"month"}
					date={date}
					setDate={setDate}
					numOfDaysInMonth={date.numOfDaysInMonth}
					numOfDaysInMonthPrev={date.numOfDaysInMonthPrev}
				/>
			</div>
		</div>
	);
}

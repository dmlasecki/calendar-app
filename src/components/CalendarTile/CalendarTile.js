import React from "react";
import styles from "./CalendarTile.module.css";

import { MONTHS } from "../../constants/constants";

import DayMonthNavigationButtons from "../DayMonthNavigationButtons/DayMonthNavigationButtons";
const DAY = "day";

export default function CalendarTile({ date, setDate, type }) {
	return (
		<div className={styles.gridCalendarTile}>
			<div className={styles.gridCalendarTileInfo}>
				<span>
					{type === DAY ? `${date.day} ` : null} <b>{`${MONTHS[date.month]} `}</b> {date.year}
				</span>
			</div>
			<div>
				<DayMonthNavigationButtons
					type={type}
					date={date}
					setDate={setDate}
					numOfDaysInMonth={date.numOfDaysInMonth}
					numOfDaysInMonthPrev={date.numOfDaysInMonthPrev}
				/>
			</div>
		</div>
	);
}

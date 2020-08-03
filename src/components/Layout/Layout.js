import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
	return (
		<div className={styles.layout}>
			<div className={styles.layoutContainer}>
				<header className={styles.header}>
					<Link to={"/calendar"}>Calendar</Link>
					<Link to={"/day"}>Day</Link>
				</header>
				{children}
			</div>

		</div>
	);
}

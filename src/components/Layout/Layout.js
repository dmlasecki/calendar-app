import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<button>
					<Link to={"/calendar"}>Go to calendar</Link>
				</button>
				<button>
					<Link to={"/day"}>Go to day</Link>
				</button>
			</header>
			{children}
		</div>
	);
}

import React from "react";
import styles from "./Modal.module.css"

export default function ErrorMessage() {
    return <div className={styles.modalError}>
        <span>Something went wrong.</span>
    </div>
}
import React from "react";

import styles from "./Modal.module.css";

export default function ModalButtons({ hideModal, handleSubmit}) {
    return <div>
        <button className={styles.modalButtonClose} onClick={hideModal}>Close</button>
        <button className={styles.modalButtonSubmit} onClick={handleSubmit}>Submit</button>
    </div>
}
import React from "react";

export default function ModalButtons({ hideModal, handleSubmit}) {
    return <div>
        <button onClick={hideModal}>Close</button>
        <button onClick={handleSubmit}>Submit</button>
    </div>
}
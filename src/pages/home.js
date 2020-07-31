import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <button><Link to={"/calendar"}>Go to calendar</Link></button>
        </div>
    );
}

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "src/components/Navbar";

function Tutorial() {
    return (
        <div className="font-jost">
            <Navbar />
            <div>
                <p>Welcome to the Tutorial !</p>
            </div>
        </div>
    );
}

export default Tutorial;

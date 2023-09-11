import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "src/components/Navbar";

function Practice() {
    return (
        <div className="font-jost">
            <Navbar />
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Practice;

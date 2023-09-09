import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function Practice() {
    return (
        <>
        <Navbar/>
        <div>
            <Link to="/">Return</Link>
            <p>Welcome to the practice page !</p>
        </div>
        </>
    );


}

export default Practice;
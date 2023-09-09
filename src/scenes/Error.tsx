import React from 'react';
import { Link,useNavigate, useRouteError } from 'react-router-dom';

function Error() {
    const error = useRouteError();
    console.log("An error has occured with router -Bird: ", error);
    
    const navigate = useNavigate();
    return (
        <div>
            <p>
                an error has occured !
            </p>
            <button onClick={()=>{navigate(-1)}}>Go back</button>
            <Link to="/" >Return to main menu instead ? </Link>
        </div>
    );
}

export default Error;
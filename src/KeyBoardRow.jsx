import React, {useState, useEffect} from "react";
import Key from "./key.jsx";
const KeyBoardRow = (props) => {
    console.log('breakpoint 2')
    console.log(props)
    useEffect(()=>{
    });
    

    return (
        <div className="keyboardrow">
            {props.row.map( (key, index) => 

            // props of react components dont re render (or update the props value) on props change unless a key prop is present
                <Key key={key} keychar={key}/>
            )}
        </div>
    );
}

export default KeyBoardRow
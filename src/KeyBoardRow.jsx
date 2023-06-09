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
                <Key keychar={key}/>
            )}
        </div>
    );
}

export default KeyBoardRow
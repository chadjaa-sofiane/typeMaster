import React, {useState, useEffect} from "react";
import Key from "./Key";


const KeyBoardRow = ({row}: KeyBoardRowProps) => {
    

    return (
        <div className="flex gap-[.1rem]">
            {row.map( (key, index) => 

            // props of react components dont re render (or update the props value) on props change unless a key prop is present
                <Key key={key} keychar={key}/>
            )}
        </div>
    );
}

export default KeyBoardRow


type KeyBoardRowProps = {
    row: string[];
}
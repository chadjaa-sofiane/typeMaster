import React, {useState, useEffect} from "react";
import KeyBoardRow from './KeyBoardRow.jsx'

const KeyBoard = () => {
    const [rows, setRows] = useState(window.keyboard_layouts.ISO["alpha_numerics"]) 
    const [loading, setLoading] = useState(true)
    useEffect(()=>{

    // i mean is there truly no better way to do this ? ...
    //window.addEventListener('keydown', handleKeyPress)


    setRows( rows.map( (row, index)=>
        window.keyboard_layouts.ISO["special_keys_first"][index]
        .concat(row.split(""))
        .concat(window.keyboard_layouts.ISO["special_keys_last"][index])
    )
    )
    setRows(rows => rows.concat([window.keyboard_layouts.ISO["last_row"]]))
    
    setLoading(false)
    console.log('breakpoint3', rows)
    
    //console.log("break point 1")
    //console.log(rows)
    /*console.log(rows.map( (row, index)=>
    window.keyboard_layouts.ISO["special_keys_first"][index]
    .concat(row.split(""))
    .concat(window.keyboard_layouts.ISO["special_keys_last"][index])
))
*/
    
}, []);

const handleKeyPress= (e) => {
    console.log('event recognized', e);

    if(e.key === 'd'){
        console.log('D key press event recognized')
    }
}


    if(loading){
        return (<p>loading</p>)
    }
    else{
        return (
            <div className="keyboard" onKeyDown={handleKeyPress} tabIndex={-1}>
                {rows.map( (row, index) => 
                    <KeyBoardRow row={row}/>
                )}
            </div>
        );
    }

}

export default KeyBoard
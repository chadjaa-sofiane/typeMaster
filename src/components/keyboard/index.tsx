import React, {useState, useEffect, useRef, useContext} from "react";
import KeyBoardRow from "src/components/keyboard/KeyboardRow";

import {qwertyKeySet} from 'src/assets/iso_qwerty'

const Keyboard = () => {

    const {rows, rows_alt} = qwertyKeySet;
    const [loading, setLoading] = useState(true)
    const [key_set, setKeySet]= useState(rows)

    const keyboardHandleKeyDown= (event: KeyboardEvent)=>{
        console.log(event.code)
        if(event.code ==='ShiftLeft' || event.code === 'ShiftRight'){
            setKeySet(rows_alt);
        }
    }
    
    
    const keyboardHandleKeyUp= (event: KeyboardEvent)=>{
        if(event.code ==='ShiftLeft' || event.code === 'ShiftRight'){
            setKeySet(rows);
        }
    }

useEffect(()=>{   
    setLoading(false)
},[]);

useEffect(()=>{
    window.addEventListener("keydown", keyboardHandleKeyDown)
    window.addEventListener("keyup", keyboardHandleKeyUp)
    return ()=>{
        window.removeEventListener("keydown", keyboardHandleKeyDown)
        window.removeEventListener("keyup", keyboardHandleKeyUp)
    }
},[])

    if(loading){
        return (<p>loading</p>)
    }
    else{
        return (

            <div className="flex flex-col gap-1 w-fit" id="keyboard">
            {
                key_set.map( (row, index) => <KeyBoardRow row={row} />)
            }
            </div>


        );
    }

}

export default Keyboard
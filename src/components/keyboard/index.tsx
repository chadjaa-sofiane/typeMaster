import React, {useState, useEffect, useRef, useContext} from "react";
import KeyBoardRow from "src/components/keyboard/KeyboardRow";

import {qwertyKeySet} from 'src/assets/iso_qwerty'

const Keyboard = () => {

    const {rows, rows_alt} = qwertyKeySet;

    const [loading, setLoading] = useState(true)
    const [key_set, setKeySet]= useState(rows)
    

const handleKeyDownKeyboard= (event : KeyboardEvent) => {
    event.stopPropagation();
    console.log('caught keydown event in keyboard: ', event.code);
}




useEffect(()=>{   
    setLoading(false)
},[]);

useEffect(()=>{
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    return ()=>{
        window.removeEventListener("keydown", handleKeyDown)
        window.removeEventListener("keyup", handleKeyUp)
    }

})

const handleKeyDown= (event: KeyboardEvent)=>{
    if(event.repeat){return}
    if(event.code ==='ShiftLeft' || event.code === 'ShiftRight'){
        setKeySet(rows_alt);
    }
}


const handleKeyUp= (event: KeyboardEvent)=>{

    if(event.code ==='ShiftLeft' || event.code === 'ShiftRight'){
        setKeySet(rows)
    }
    
}


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
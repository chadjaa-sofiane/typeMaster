import React, {useState, useEffect, useRef, useContext} from "react";
import KeyBoardRow from "src/components/keyboard/KeyboardRow";

import {qwertyKeySet} from 'src/assets/iso_qwerty'

const Keyboard = () => {

    const {rows, rows_alt} = qwertyKeySet;

    const [loading, setLoading] = useState(true)
    const [capsLock, setCapsLock] = useState(false)
    const [key_set, setKeySet]= useState(rows)
    

const handleKeyDownKeyboard= (event : KeyboardEvent) => {
    event.stopPropagation()
    console.log('caught keydown event in keyboard: ', event.code)
    if(event.code === 'CapsLock'){
        setCapsLock(capsLock => !capsLock)
    }
}




useEffect(()=>{   
    setLoading(false)
},[]);



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
import React, {useState, useEffect} from "react";

const Key = (props) => {

    const [isDown, setIsDown] = useState(false)
    const special_keys = window.keyboard_layouts.ISO["special_keys_first"]
                   .concat(window.keyboard_layouts.ISO["special_keys_last"])
                   .concat(window.keyboard_layouts.ISO["last_row"])
    
    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

    },[])


    const handleKeyDown= (event)=>{
        if(event.key === props.keychar || event.code === props.keychar){
            console.log('event down localy recognized with key = ', props.keychar)
            if(! isDown){
                setIsDown(isDown => true)
            }
        }
    }

    const handleKeyUp= (event)=>{
        if(event.key === props.keychar || event.code === props.keychar){
            console.log('event up localy recognized with key = ', props.keychar)
            setIsDown(isDown => false)
        }

        
    }

    return (

        //TODO include the keycodes check as well when trying to add the special-key class
        <div className={"key"+ (isDown? " active" : "") + (special_keys.includes(props.keychar)? " special-key-"+props.keychar : "")}>
            {props.keychar}
        </div>
    );
}

export default Key
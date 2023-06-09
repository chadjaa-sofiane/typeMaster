import React, {useState, useEffect} from "react";

const Key = (props) => {

    const [isDown, setIsDown] = useState(false)
    
    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

    },[])


    const handleKeyDown= (event)=>{
        if(event.key === props.keychar || event.keyCode === props.keychar){
            console.log('event down localy recognized with key = ', props.keychar)
            if(! isDown){
                setIsDown(isDown => true)
            }
        }
    }

    const handleKeyUp= (event)=>{
        if(event.key === props.keychar || event.keyCode === props.keychar){
            console.log('event up localy recognized with key = ', props.keychar)
        }

        
        setIsDown(isDown => false)
    }

    return (
        <div className={"key"+ (isDown? " active" : "")}>
            {props.keychar}
        </div>
    );
}

export default Key
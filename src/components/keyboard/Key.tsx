import React, {useState, useEffect, useContext, useCallback, useRef} from "react";
import {qwertyLayout} from 'src/assets/keyboard-layouts';
import { qwertyKeySet } from "src/assets/iso_qwerty";
import { useSelector, useDispatch } from "react-redux";

// svg assets
import Backspace from 'src/assets/keys/Backspace.svg'
import CapsLock from 'src/assets/keys/CapsLock.svg'
import ControlLeft from 'src/assets/keys/ControlLeft.svg'
import ControlRight from 'src/assets/keys/ControlRight.svg'
import Enter from 'src/assets/keys/Enter.svg'
import MetaLeft from 'src/assets/keys/MetaLeft.svg'
import ShiftLeft from 'src/assets/keys/ShiftLeft.svg'
import ShiftRight from 'src/assets/keys/ShiftRight.svg'
import Space from 'src/assets/keys/Space.svg'
import Tab from 'src/assets/keys/Tab.svg'
import AltLeft from 'src/assets/keys/AltLeft.svg'
import AltRight from 'src/assets/keys/AltRight.svg'
import { RootState } from "src/redux/store";
import { generateChar, setFeedback, incrementTotal, incrementCorrect } from "src/redux/generatedCharSlice";
import { incrementCurrentIndex, pushCurrentTyped, pushCorrectChars } from "src/redux/generatedSentenceSlice";

//import moveKeyById from "../controllers/moveKeyById.js";

const Key = ({keychar}: KeyProps) => {

    const [isDown, setIsDown] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const generatedChar = useSelector((state: RootState)=> state.generatedChar.value);
    const feedback = useSelector((state: RootState)=> state.generatedChar.feedback);

    //sentence
    const generatedSentence = useSelector((state: RootState) => state.generatedSentence.value);
    const currentIndex = useSelector((state: RootState) => state.generatedSentence.currentIndex);
    const currentTyped = useSelector((state: RootState) => state.generatedSentence.currentTyped);
    const correctChars = useSelector((state: RootState) => state.generatedSentence.correctChars);


    const dispatch = useDispatch();

    // will set the size of the keyboard
    const [fontSize, setFontSize] = useState('lg');
    const special_keys =   qwertyLayout["special_keys_first"].flat(1)
                   .concat(qwertyLayout["special_keys_last"].flat(1))
                   .concat(qwertyLayout["last_row"])

    
    //TODO add a className property to each of the entries in this special keys icons obj
    // use tailwind classes to set the style of each key and include by interpolating it into the tag
                   const special_keys_props = [
        {
            key: "AltLeft",
            icon: AltLeft,
            className: `w-[1em]`
        },
        {
            key: "AltRight",
            icon: AltRight,
            className: `w-[1em]`
        }
        ,
        {
            key: "Backspace",
            icon: Backspace,
            className: `grow`
        },
        {
            key: "CapsLock",
            icon: CapsLock,
            className: `grow`
        },
        {
            key: "ControlLeft",
            icon: ControlLeft,
            className: `w-[1em]`
        },
        {
            key: "ControlRight",
            icon: ControlRight,
            className: `w-[1em]`
        },
        {
            key: "Enter",
            icon: Enter,
            className: `w-[1em]`
        },
        {
            key: "MetaLeft",
            icon: MetaLeft,
            className: `w-[1em]`
        },
        {
            key: "ShiftLeft",
            icon: ShiftLeft,
            className: `grow`
        },
        {
            key: "ShiftRight",
            icon: ShiftRight,
            className: `grow`
        },
        {
            key: "Space",
            icon: Space,
            className: 'grow'
        },
        {
            key: "Tab",
            icon: Tab,
            className: `grow`
        }
    ]

    const current_key = special_keys_props.find(obj=>obj.key===keychar)
    const handleKeyDown= (event: KeyboardEvent)=>{
        if(event.repeat){return}

        if(event.key === keychar || event.code === keychar){
            dispatch(incrementTotal());
            dispatch(incrementCurrentIndex());
            dispatch(pushCurrentTyped(keychar));
            setIsDown(true);
            if(generatedChar === keychar){
                setIsCorrect(true);
                dispatch(incrementCorrect());
                dispatch(setFeedback("Great !"));
            }
            else{
                dispatch(setFeedback("Try again !"));

            }

            if(generatedSentence[currentIndex] === keychar || generatedSentence[currentIndex] === event.key){
                dispatch(pushCorrectChars(true));
            }
            else{
                dispatch(pushCorrectChars(false));
            }
            //console.log('generated char: ', generatedChar,' kechar: ',keychar)
            //console.log(generatedChar == keychar);
            //console.log(isCorrect)
            console.log(event.key);
        }

    }


    const handleKeyUp= (event: KeyboardEvent)=>{


        if(event.key === keychar || event.code === keychar){
            setIsDown((isDown) => false);
        }

        
    }

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }

    })

    return (

        <div className=
        { `
            relative flex flex-col justify-center items-center w-fit h-fit ${isDown? (isCorrect? 'bg-green-500' :'bg-red-500'): 'bg-secondary'} border border-primary rounded-lg text-${fontSize}
            ${isDown && `scale-110 text-white shadow-surround shadow-accent`}
            ${special_keys.includes(keychar) && current_key.className
            }
            `}
              id={keychar}>
            {
            (special_keys.includes(keychar)
            ? <div className="p-[.75em]"><img className={`h-[1em] w-[1em]`} src={current_key.icon}/></div>
            : <div className="p-[.75em]"><span className="flex justify-center items-center w-[1em] h-[1em]">{keychar}</span></div>)
            }
            {
            (keychar === 'f' || keychar === 'F' || keychar === 'j' || keychar === 'J')
            ? <span className={`absolute top-[1em] flex justify-center items-center text-${fontSize}`}>_</span>
            : <></>
            } 

        </div>
    );
}

type KeyProps = {
    keychar: string;
    //keycharAlt: string;
  };

export default Key
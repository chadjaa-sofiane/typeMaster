import React from 'react';
import Keyboard from 'src/components/keyboard';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from 'src/redux/store';

function CharacterPractice() {
    const generatedChar = useSelector((state: RootState)=> state.generatedChar.value);
    return (
        <div className='flex flex-col justify-center items-center p-12'>
            <span>welcome to character practice !</span>
            <span>Generated char: {generatedChar}</span>
            <Keyboard/>
        </div>
    );
}

export default CharacterPractice;
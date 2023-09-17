import React from 'react';
import Keyboard from 'src/components/keyboard';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from 'src/redux/store';

function CharacterPractice() {
    const generatedChar = useSelector((state: RootState)=> state.generatedChar.value);
    const feedback = useSelector((state: RootState)=> state.generatedChar.feedback);

    return (
        <div className='h-[calc(100vh-3rem)] flex flex-col justify-between items-center p-12 bg-primary-light'>
            <div className='flex flex-col justify-stretch items-center gap-3'>
            <span className='bg-secondary p-12 border border-primary rounded-2xl text-3xl w-full'>Welcome to character practice !</span>
            <div className='flex gap-2'>
            <span className='bg-secondary p-12 border border-primary rounded-2xl text-3xl'>Generated char: {generatedChar}</span>
            <span className='bg-secondary p-12 border border-primary rounded-2xl text-3xl'>{feedback}</span>
            </div>
            </div>

            <div className='p-28'>
            <Keyboard/>
            </div>
        </div>
    );
}

export default CharacterPractice;
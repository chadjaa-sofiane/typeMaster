import React from 'react';
import {useEffect} from 'react';
import { RootState } from 'src/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import Keyboard from 'src/components/keyboard';
import { reset } from 'src/redux/generatedSentenceSlice';

function SentencePractice() {

    const dispatch = useDispatch();

    const generatedSentence = useSelector(
        (state: RootState) => state.generatedSentence.value
    );
    const feedback = useSelector(
        (state: RootState) => state.generatedSentence.feedback
    );
    const total = useSelector((state: RootState) => state.generatedSentence.total);
    const correct = useSelector(
        (state: RootState) => state.generatedSentence.correct
    );
    const currentIndex = useSelector((state: RootState) => state.generatedSentence.currentIndex);
    const currentTyped = useSelector((state: RootState) => state.generatedSentence.currentTyped);
    const correctChars = useSelector((state: RootState) => state.generatedSentence.correctChars);
    
    const accuracyReducer = (accumulator: number, currentValue: boolean)=>{
        if(currentValue === true){
            return accumulator + 1;
        }
        else{
            return accumulator;
        }
    }

    useEffect(()=>{
        dispatch(reset());
    },[]);

    return (
        <div className="h-[calc(100vh-3rem)] flex flex-col justify-between items-center p-12 bg-primary-light">
            <div className="flex flex-col justify-stretch items-center gap-3">
                <span className="bg-secondary p-12 border border-primary rounded-2xl text-3xl w-full">
                    Welcome to Sentence practice !
                </span>
                <div className="flex gap-2">
                    <span className="bg-secondary p-12 border border-primary rounded-2xl text-3xl">
                        {
                        [...generatedSentence].slice(0, currentIndex).map((char, index)=><span className={`${correctChars[index] === true ? 'bg-green-500': 'bg-red-500'}`}>{char}</span>)
                        }
                        {
                        [...generatedSentence].slice(currentIndex, generatedSentence.length).map((char, index)=><span>{char}</span>)
                        }
                    </span>
                </div>
                <span className='bg-secondary p-12 border border-primary rounded-2xl text-3xl'>
                Accuracy: {[...currentTyped].length > 0 && correctChars.reduce(accuracyReducer, 0)/[...currentTyped].length}
                {[...currentTyped].length === 0 && 0}
                </span>
            </div>

            <div className="p-28">
                <Keyboard />
            </div>
        </div>
    );
}

export default SentencePractice;
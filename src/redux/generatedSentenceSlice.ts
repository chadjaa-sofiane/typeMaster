import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface generatedSentenceState {
  value: string,
  currentIndex: number,
  currentTyped: string,
  correctChars: boolean[],
  feedback: string,
  total: number,
  correct: number,
}

const initialState: generatedSentenceState = {
  value: "the quick brown fox jumps over the lazy dog",
  currentIndex: 0,
  currentTyped: "",
  correctChars: [],
  feedback: 'Type the generated sentence !',
  total : 0,
  correct: 0,
}

export const generatedSentenceSlice = createSlice({
  name: 'generatedSentence',
  initialState,
  reducers: {
    generateSentence: (state, action: PayloadAction<string>)=>{
        state.value = action.payload;
    },
    setFeedback: (state, action: PayloadAction<string>)=>{
      state.feedback = action.payload;
    },
    incrementTotal: (state)=>{
      state.total = state.total + 1;
    },
    incrementCorrect: (state)=>{
      state.correct = state.correct + 1;
    },
    incrementCurrentIndex: (state)=>{
      state.currentIndex = state.currentIndex +1
    },
    pushCurrentTyped: (state, action: PayloadAction<string>)=>{
      state.currentTyped = [...state.currentTyped, action.payload].join("");
    },
    pushCorrectChars: (state, action: PayloadAction<boolean>)=>{
      state.correctChars = [...state.correctChars, action.payload]
    },
    reset: (state)=>{
      state.total = 0;
      state.correct = 0;
      state.currentIndex = 0;
      state.currentTyped = "";
      state.correctChars = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { generateSentence,
   setFeedback,
    incrementTotal,
     incrementCorrect,
      incrementCurrentIndex,
       pushCurrentTyped,
        pushCorrectChars,
         reset} = generatedSentenceSlice.actions
export default generatedSentenceSlice.reducer
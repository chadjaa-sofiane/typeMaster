import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { qwertyLayout } from 'src/assets/keyboard-layouts'

const possible_chars = 
[]
.concat(qwertyLayout["alpha_numerics"].map(row => row.split("")))
.concat(qwertyLayout["alpha_numerics_alt"].map(row => row.split("")))
.flat(1);

export interface generatedCharState {
  value: string,
  feedback: string,
  total: number,
  correct: number,
}

const initialState: generatedCharState = {
  value: possible_chars[Math.floor(Math.random() * possible_chars.length)],
  feedback: 'Type the generated character !',
  total : 0,
  correct: 0,
}

export const generatedCharSlice = createSlice({
  name: 'generatedChar',
  initialState,
  reducers: {
    generateChar: (state)=>{
        state.value = possible_chars[Math.floor(Math.random() * possible_chars.length)];
    },
    setFeedback: (state, action: PayloadAction<string>)=>{
      state.feedback = action.payload;
    },
    incrementTotal: (state)=>{
      state.total = state.total + 1;
    },
    incrementCorrect: (state)=>{
      state.correct = state.correct + 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { generateChar, setFeedback, incrementTotal, incrementCorrect} = generatedCharSlice.actions
export default generatedCharSlice.reducer
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
}

const initialState: generatedCharState = {
  value: possible_chars[Math.floor(Math.random() * possible_chars.length)],
  feedback: 'Type the generated character !',
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { generateChar, setFeedback} = generatedCharSlice.actions
export default generatedCharSlice.reducer
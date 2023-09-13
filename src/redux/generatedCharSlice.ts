import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { qwertyLayout } from 'src/assets/keyboard-layouts'

const possible_chars = 
[]
.concat(qwertyLayout["alpha_numerics"].map(row => row.split("")))
.concat(qwertyLayout["alpha_numerics_alt"].map(row => row.split("")))
.flat(1);

export interface generatedCharState {
  value: string
}

const initialState: generatedCharState = {
  value: possible_chars[Math.floor(Math.random() * possible_chars.length)],
}

export const generatedCharSlice = createSlice({
  name: 'generatedChar',
  initialState,
  reducers: {
    generateChar: (state)=>{
        state.value = possible_chars[Math.floor(Math.random() * possible_chars.length)]
    },
  },
})

// Action creators are generated for each case reducer function
export const { generateChar} = generatedCharSlice.actions

export default generatedCharSlice.reducer
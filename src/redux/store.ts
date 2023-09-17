import { configureStore } from '@reduxjs/toolkit';
import generatedCharReducer from 'src/redux/generatedCharSlice';
import generatedSentenceReducer from 'src/redux/generatedSentenceSlice';

export const store = configureStore({
  reducer: {
    generatedChar: generatedCharReducer,
    generatedSentence: generatedSentenceReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
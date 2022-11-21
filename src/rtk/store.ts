import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { moviesSlice } from './slices/movieSlice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
    }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store

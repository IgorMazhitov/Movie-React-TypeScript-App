import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './slices/movieSlice'
import { pagesSlice } from './slices/pagesSlice'
import { userSlice } from './slices/userSlice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        pages: pagesSlice.reducer,
        user: userSlice.reducer
    }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store

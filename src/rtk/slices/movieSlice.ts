import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IMoviesState {
    country: string,
    service: string,
    type: string,
    genre?: number,
    keyword?: string,
    page?: number,
    moviesArray: any[]
}

const initialState: IMoviesState = {
    country: 'us',
    service: 'disney',
    type: 'movie',
    page: 1,
    moviesArray: []
}

export const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies(state, action) {
            state.moviesArray = action.payload
        },
        setPage(state, action) {
            state.page = action.payload
        },
        setCountry(state, action) {
            state.country = action.payload
        }, 
        setService(state, action) {
            state.service = action.payload
        },
        setType(state, action) {
            state.type = action.payload
        },
        setGenre(state, action) {
            state.genre = action.payload
        },
        setKeyword(state, action) {
            state.keyword = action.payload
        }
    }
})

export default moviesSlice.reducer
export const {setCountry, setGenre, setKeyword, setMovies, setPage, setService, setType} = moviesSlice.actions
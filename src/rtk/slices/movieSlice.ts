import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface IMovieState {
    
    age: number,
    backdropPath: string,
    backdropURLs: {
        '300': string,
        '780': string,
        '1280': string,
        'original': string,
    },
    cast: string[],
    countries: string[],
    genres: number[],
    imdbID: string,
    imdbRating: number,
    imdbVoteCount: number,
    originalTitle: string,
    overview: string,
    posterPath: string,
    posterURLs: {
        '92': string,
        '154': string,
        '185': string,
        '342': string,
        '500': string,
        '780': string,
        'original': string,
    },
    runtime: number,
    significants: string[],
    streamingInfo: {
        [key: string]: {
            [key: string]: {
                added: number,
                leaving: number,
                link: string
            }
        }
    },
    tagline: string,
    title: string,
    tmdbID: string,
    video: string,
    year: number

}

interface IMoviesState {

    moviesArray: Array<IMovieState>,
    searchPage: number,
    maxPage?: number,
    searchCountry: string,
    searchService: string,
    searchType: string,
    searchGenres?: number,
    searchKeyWord?: string,
    loadingState?: boolean,
    filterState?: boolean,
    genresState?: boolean,
    countryState?: boolean

}

const initialState: IMoviesState = {

    moviesArray: [],
    searchPage: 1,
    searchCountry: 'us',
    searchService: 'netflix',
    searchType: 'movie',
    searchKeyWord: '',
    loadingState: false,

}
  
export const getMovies = createAsyncThunk(

    'movie/getMovies',
    async (parameters: any,{rejectWithValue, dispatch}) => {
        const options = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/search/basic',
            params: parameters,
            headers: {
              'X-RapidAPI-Key': '6ccd75df03msh4bd02ee4f2df42ap16cf8ajsnd10916768322',
              'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        }
        const res = await axios.request(options).then(response => response.data)
        return res
    }

)

export const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies(state, action) {
            state.moviesArray = action.payload
        },
        setPage(state, action) {
            state.searchPage = action.payload
        },
        setMaxPage(state, action) {
            state.maxPage = action.payload
        },
        setCountry(state, action) {
            state.searchCountry = action.payload
        }, 
        setService(state, action) {
            state.searchService = action.payload
        },
        setType(state, action) {
            state.searchType = action.payload
        },
        setGenre(state, action) {
            state.searchGenres = action.payload
        },
        setKeyword(state, action) {
            state.searchKeyWord = action.payload
        },
    }, 
    extraReducers(builder) {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loadingState = false
            state.moviesArray = action.payload.results
            state.maxPage = action.payload.total_pages
        })
        builder.addCase(getMovies.pending, (state, action) => {
            state.loadingState = true
        })
    },
})

export default moviesSlice.reducer
export const {setCountry, setGenre, setKeyword, setMovies, setPage, setService, setType, setMaxPage} = moviesSlice.actions
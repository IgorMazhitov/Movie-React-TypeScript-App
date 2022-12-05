import { createSlice } from '@reduxjs/toolkit'

    interface IPagesSlice {
        homePageState: boolean,
        searchPageState: boolean
    }

    const initialState: IPagesSlice = {

        homePageState: true,
        searchPageState: false

    }

    export const pagesSlice = createSlice({
        name: 'pages',
        initialState,
        reducers: {

            setHomePageActive(state) {
                state.homePageState = true
                state.searchPageState = false
            },

            setSearchPageActive(state) {
                state.searchPageState = true
                state.homePageState = false
            }

        }
    })

    export default pagesSlice.reducer
    export const { setHomePageActive, setSearchPageActive } = pagesSlice.actions
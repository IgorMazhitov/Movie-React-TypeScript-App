import { createSlice } from "@reduxjs/toolkit"

interface IUserState {
    users: [
        {

            id: string
            favorites: any[]

        }
    ]
}

const initialState: IUserState = {
    users: [
        {

            id: '12345678',
            favorites: ['']
        }
    ]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFavorites(state, action: {payload: {userID: string, filmTitle: string}, type: string}) {
            state.users.forEach(el => el.id === action.payload.userID ? el.favorites.push(action.payload.filmTitle) : null)
        },
        deleteFavorites(state, action: {payload: {userID: string, filmTitle: string}, type: string}) {
            state.users.forEach(el => el.id === action.payload.userID ? el.favorites.filter(movie => movie !== action.payload.filmTitle) : null)
        }
    }
})

export default userSlice.reducer
export const {addFavorites, deleteFavorites} = userSlice.actions
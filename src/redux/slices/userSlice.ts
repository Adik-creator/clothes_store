import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    email: null | string;
    token: null | string;
    id: null | number;
}

const initialState: CounterState = {
    email: null,
    token: null,
    id: null,
}

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser: (state) => {
            state.email = null
            state.token = null
            state.id = null
        },
    },
})
export const {addUser, removeUser} = counterSlice.actions

export default counterSlice.reducer
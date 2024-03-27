'use client'

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        // loading: false,
        // error: null as null | string | undefined
    },
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload
        }
    },




})
export const { userLoggedIn } = userSlice.actions

export default userSlice.reducer



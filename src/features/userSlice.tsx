'use client'

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,

    },
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload
        },
        logOutAction: (state) => {
            state.user = null
        }
    },




})
export const { userLoggedIn, logOutAction } = userSlice.actions

export default userSlice.reducer



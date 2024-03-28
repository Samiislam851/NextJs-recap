'use client'

import userSlice from "@/features/userSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import persistStore from "redux-persist/es/persistStore"
import { useDispatch } from "react-redux"






const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}




const reducer = combineReducers({ user: userSlice })

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({

    reducer: persistedReducer

})


export const persistor = persistStore(store);
export default store
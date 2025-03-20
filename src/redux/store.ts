import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"

export const store = configureStore({
    reducer:{
        counter: counterReducer
    },
    devTools:{
        name:"Vite+React+TS"
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
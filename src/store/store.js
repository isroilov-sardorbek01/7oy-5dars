import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./storSlice";


export const store = configureStore({
    reducer: {
        counter: storeSlice,
    },
});

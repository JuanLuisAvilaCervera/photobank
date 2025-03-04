import { configureStore } from "@reduxjs/toolkit";
import { HomeSlice } from "../features/homeSlice";


export const Store = configureStore ({
    reducer: {
        images: HomeSlice.reducer
    }

})

export default Store;
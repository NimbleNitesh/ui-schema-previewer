import { configureStore } from "@reduxjs/toolkit";
import simpleUITypesSlice from "./slices/simpleUITypesSlice";

const store = configureStore({
    reducer: {
        simpleUI: simpleUITypesSlice,
    },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../state/counter/CounterSlice"
export default configureStore({

    reducer:{
        counter: CounterReducer 
    }
})
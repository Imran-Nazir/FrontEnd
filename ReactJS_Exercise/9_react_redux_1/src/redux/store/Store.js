import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../state/counter/CounterSlice"
import TodoReducer from "../state/todo/TodoSlice"
export default configureStore({

    reducer:{
        counter: CounterReducer,
        todo: TodoReducer
    }
})
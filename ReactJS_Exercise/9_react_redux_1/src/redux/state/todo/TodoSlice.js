import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: "todo",
    initialState:{
        value: [],
    },
    reducers:{
        AddTodo: (state, action)=>{
            //debugger;
            state.value.push(action.payload);
        },
        RemoveTodo: (state, action)=>{
            state.value.splice(action.payload, 1);
        },

        EditTodo: (state, action)=>{
            //{index:1, task:'to do name'} এরকম ভাবে action.payload er মধ্যে যাবে।
            state.value.splice(action.payload['index'], 1, action.payload['item']);
        }
    }
})

export const {AddTodo, RemoveTodo, EditTodo, Reset} = TodoSlice.actions;
export default TodoSlice.reducer;
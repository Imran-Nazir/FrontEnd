import {createSlice} from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers:{
        increment: (state)=>{
            state.value = state.value + 1
        },
        decrement: (state)=>{
            state.value = state.value - 1
        },
        setCustom: (state, action)=>{
            state.value = action.payload
        },
        reset:(state)=>{
            state.value = 0
        }
    }
})
export const {increment, decrement, setCustom,reset} = CounterSlice.actions;
export default CounterSlice.reducer;
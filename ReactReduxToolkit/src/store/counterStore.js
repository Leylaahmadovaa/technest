import { createSlice } from "@reduxjs/toolkit";

const initialState={counter:0,isActive:false}
const counterStore=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment : (state)=>{state.counter++},
        decrement:(state)=>{state.counter--},
        increase:(state, action)=>{state.counter+=action.amount},
        toggle:(state)=>{state.isActive=!state.isActive}
    }
})
export const CounterActions=counterStore.actions
export default counterStore.reducer
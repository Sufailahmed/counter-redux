import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,actions)=>{
           
            state.value=state.value+actions.payload
        },
        decrement:(state,actions)=>{
            state.value=state.value-actions.payload
        },
        reset:(state)=>{
            state.value=state.value=0
        }
    }

});
export const {increment}=counterSlice.actions;
 export const{decrement}=counterSlice.actions;
 export const {reset}=counterSlice.actions;
export default counterSlice.reducer;
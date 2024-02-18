import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tasks:[],
}

const taskslice = createSlice({
    name:"taskSlide",
    initialState,
   reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1,  ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
         
        });
      }
   }},
   
   
})
export const  {addTask} = taskslice.actions;
export default taskslice.reducer;
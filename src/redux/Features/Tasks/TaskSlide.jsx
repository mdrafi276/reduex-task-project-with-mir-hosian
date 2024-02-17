import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    task:[],
}

const taskslice = createSlice({
    name:"taskSlice",
    initialState,
    reducers:{},
})
export default taskslice.reducer
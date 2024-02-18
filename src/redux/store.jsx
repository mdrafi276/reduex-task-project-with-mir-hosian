import { configureStore } from "@reduxjs/toolkit";
import TaskSlide from "./Features/Tasks/TaskSlide";

const store = configureStore({
    reducer:{
        tasksSlice:TaskSlide
    }
})
export default store;
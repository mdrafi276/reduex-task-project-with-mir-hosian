import { configureStore } from "@reduxjs/toolkit";
import TaskSlide from "./Features/Tasks/TaskSlide";

const store = configureStore({
    reducer:{
        task:TaskSlide
    }
})
export default store;
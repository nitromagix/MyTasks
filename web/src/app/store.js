import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import showPriorSlice from "./showPriorSlice";
import tasksReducer from "./tasksSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
    task: taskReducer,
    showPrior: showPriorSlice,
  },
});

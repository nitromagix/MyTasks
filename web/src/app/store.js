import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import showPriorSlice from "./showPriorSlice";
import taskReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    showPrior: showPriorSlice,
  },
});

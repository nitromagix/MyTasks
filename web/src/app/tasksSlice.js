//

import { createSlice } from "@reduxjs/toolkit";
import API_URL from "./api";

const now = new Date(Date.now());

const initialState = {
  taskData: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTaskData: (state, action) => {
      state.taskData = action.payload;
    },
    addTask: (state, action) => {
      state.taskData.push(action.payload);
    },
    updateTask: (state, action) => {
      const editedTask = action.payload;
      state.taskData = state.portfolioData.map((task, i) => {
        return task.uid === editedTask.uid ? editedTask : task;
      });
    },
  },
});

export const { setTaskData, addTask, updateTask } = tasksSlice.actions;

export const getTasks = (state) => state.tasks.taskData;

export const getTodaysTasks = (state) =>
  state.task.taskData.filter((task) => {
    const taskDate = new Date(task.taskDate);
    return (
      taskDate.getMonth() === now.getMonth() &&
      taskDate.getDate() === now.getDate()
    );
  });

export const getTaskDataThunk = (id) => {
  return async (dispatch, getState) => {
    const taskId = id;

    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    fetch(`${API_URL}/tasks/${taskId}`, requestOptions)
    // fetch(`${process.env.REACT_APP_SERVER_URL}/tasks/${taskId}`, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(setTaskData(res));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export const getTasksDataThunk = async (dispatch, getState) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  fetch(`${API_URL}/tasks`, requestOptions)
  // fetch(`${process.env.REACT_APP_SERVER_URL}/tasks`, requestOptions)
    .then(async (response) => {
      const res = await response.json();

      if (!response.ok) {
        const error = (res && res.message) || response.status;
        console.log(error);
        return Promise.reject(error);
      }

      dispatch(setTaskData(res));
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export const addTaskDataThunk = (data) => {
  return async (dispatch, getState) => {
    const taskData = data;

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    };

    fetch(`${API_URL}/tasks`, requestOptions)
    // fetch(`${process.env.REACT_APP_SERVER_URL}/tasks`, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(addTask(res));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export const updateTaskDataThunk = (data) => {
  return async (dispatch, getState) => {
    const taskData = data;

    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    };

    fetch(`${API_URL}/tasks`, requestOptions)
    // fetch(`${process.env.REACT_APP_SERVER_URL}/tasks`, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(updateTask(taskData));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export default tasksSlice.reducer;

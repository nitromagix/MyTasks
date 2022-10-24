import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUser } from "../contexts/CurrentUser";
import {
  getTasks,
  getTodaysTasks,
  getTasksDataThunk,
  updateTaskDataThunk,
} from "../app/tasksSlice";

import { taskStatusBgColorClassName } from "../app/colors";
import {dateToMMDDYYYY} from "../nmx"
import TaskList from "./TaskList"

const TasksAll = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;
  const dispatch = useDispatch();
  const taskData = useSelector(getTasks);

  useEffect(() => {
    async function fetchData() {
      dispatch(getTasksDataThunk);
    }
    fetchData();
  }, []);

  const now = new Date(Date.now());


  return user && user.role === "user" ? (
    <Fragment>
      <TaskList tasks={taskData} now={now} />
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TasksAll;

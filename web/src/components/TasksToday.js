import { Fragment, useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUser } from "../contexts/CurrentUser";
import {
  getTaskData,
  getTaskDataThunk,
  updateTaskDataThunk,
} from "../app/taskSlice";
import { trace } from "../nmx";

const TasksToday = () => {
  const userContext = useContext(CurrentUser);
  const dispatch = useDispatch();
  const user = userContext.currentUser;
  const taskData = useSelector(getTaskData);
  const taskView = [];
  useEffect(() => {
    async function fetchData() {
      dispatch(getTaskDataThunk);
    }
    fetchData();
  }, []);

  const buildTaskView = () => {
    for (let i in taskData) {
      const task = taskData[i];
      // console.log(task);
      const c = (
        <div
          key={task.taskId}
          style={{
            margin: 10,
            padding: 10,
            border: 1,
            borderStyle: "solid",
            borderColor: "orange",
            borderRadius: 3,
          }}
        >
          <h3>{task.name}</h3>
          <h4>{task.description}</h4>
        </div>
      );
      taskView.push(c);
    }
  };

  buildTaskView();

  return user && user.role === "user" ? (
    <Fragment>
      <h1>Today's Tasks</h1>
      {taskView}
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TasksToday;

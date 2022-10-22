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
  const user = userContext.currentUser;
  const dispatch = useDispatch();
  const taskData = useSelector(getTaskData);

  useEffect(() => {
    async function fetchData() {
      dispatch(getTaskDataThunk);
    }
    fetchData();
  }, []);

  const taskView = taskData.map((task, i) => {
    return (
      <div key={task.taskId} className="task-today">
        <div className="task-today-content ">
          <h3>{task.name}</h3>
          <p className="line-clamp">{task.description}</p>
        </div>
      </div>
    );
  });

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

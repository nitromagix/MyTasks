import { Fragment, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { getTask, getTaskDataThunk } from "../app/taskSlice";
import { taskStatus, taskStatusBgColorClassName } from "../app/taskStatus";

const TaskDetails = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;
  const dispatch = useDispatch();
  const task = useSelector(getTask);
  const { uid } = useParams();

  useEffect(() => {
    async function fetchData() {
      dispatch(getTaskDataThunk(uid));
    }
    fetchData();
  }, []);

  const localDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return user && user.role === "user" ? (
    <Fragment>
      <h1>Task Details</h1>
      <div className="task-details">
        <h3>
          <span>Name</span>: {task.name}
        </h3>
        <h3>
          <span>Description</span>: {task.description}
        </h3>
        <h3>
          <span>Task Date</span>: {localDate(task.taskDate)}
        </h3>
        {task.startedOn ? (
          <h3>
            <span>Started On</span>: {localDate(task.startedOn)}
          </h3>
        ) : null}
        <div className={`border-radius-2 ${taskStatusBgColorClassName(task)}`}>
          <h3>
            <span>Status</span>: {taskStatus(task)}
          </h3>
        </div>
      </div>
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TaskDetails;

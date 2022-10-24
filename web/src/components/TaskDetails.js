import { Fragment, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { getTask, getTaskDataThunk } from "../app/taskSlice";

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

  console.log(task)
  const localDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  }

  return user && user.role === "user" ? (
    <Fragment>
      <h1>Task Details</h1>
      <h3>Name: {task.name}</h3>
      <h3>Description: {task.description}</h3>
      <h3>Task Date: {localDate(task.taskDate)}</h3>
      {task.startedOn ? <h3>Started On: {localDate(task.startedOn)}</h3> : null}
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TaskDetails;

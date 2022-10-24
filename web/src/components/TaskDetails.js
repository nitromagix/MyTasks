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

  return user && user.role === "user" ? (
    <Fragment>
      <h1>Task Details</h1>
      {uid}
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TaskDetails;

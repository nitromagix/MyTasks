import { Fragment, useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

const TaskDetails = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  const { uid } = useParams()

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